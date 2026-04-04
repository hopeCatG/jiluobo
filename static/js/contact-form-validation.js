/**
 * 联系表单验证和美观弹窗
 */
$(document).ready(function () {
  const $form = $('form[name="contact"]');
  const $privacyCheckbox = $('#contact_privacy');
  const $submitBtn = $('#form-submit');

  // 自定义弹窗样式
  const showToast = function (message, type = 'error') {
    // 移除已存在的 toast
    $('.custom-toast').remove();

    const iconClass = type === 'success' ? 'icon-check-circle' : 'icon-exclamation-circle';
    const bgColor = type === 'success' ? '#28a745' : '#dc3545';

    const toastHtml = `
      <div class="custom-toast" style="
        position: fixed;
        top: 20px;
        right: 20px;
        min-width: 300px;
        max-width: 500px;
        padding: 15px 20px;
        background: ${bgColor};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        display: flex;
        align-items: center;
        gap: 12px;
      ">
        <i class="icon ${iconClass}" style="font-size: 20px;"></i>
        <span style="flex: 1; font-size: 14px; line-height: 1.5;">${message}</span>
        <button onclick="$(this).closest('.custom-toast').remove()" style="
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">&times;</button>
      </div>
      <style>
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
      </style>
    `;

    $('body').append(toastHtml);

    // 5 秒后自动消失
    setTimeout(function () {
      $('.custom-toast').css('animation', 'slideOutRight 0.3s ease-out');
      setTimeout(function () {
        $('.custom-toast').remove();
      }, 300);
    }, 5000);
  };

  // 验证邮箱格式
  const isValidEmail = function (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 验证手机号格式（支持中国和国际格式）
  const isValidPhone = function (phone) {
    // 移除空格和连字符
    const cleanPhone = phone.replace(/[\s\-]/g, '');
    // 支持中国手机号（11 位，以 1 开头）和国际号码
    const phoneRegex = /^(\+?86)?1[3-9]\d{9}$|^\+?[1-9]\d{6,14}$/;
    return phoneRegex.test(cleanPhone);
  };

  // 表单项验证
  const validateField = function ($field) {
    const value = $field.val().trim();
    const fieldName = $field.attr('placeholder') || $field.prev('label').text() || $field.attr('id');

    // 必填字段检查
    if ($field.prop('required') && !value) {
      showToast(`请填写${fieldName}`, 'error');
      $field.focus();
      return false;
    }

    // 邮箱格式验证
    if ($field.attr('type') === 'email' && value) {
      if (!isValidEmail(value)) {
        showToast('请输入有效的邮箱地址', 'error');
        $field.focus();
        return false;
      }
    }

    // 手机号验证
    if ($field.attr('id') === 'contact_phone' && value) {
      if (!isValidPhone(value)) {
        showToast('请输入有效的手机号码', 'error');
        $field.focus();
        return false;
      }
    }

    return true;
  };


  // 解析
  const parseQueryStringToObject = (queryString) => {
    // 如果字符串以?开头，去掉问号
    if (queryString.startsWith('?')) {
      queryString = queryString.substring(1);
    }

    const result = {};

    // 空字符串直接返回空对象
    if (!queryString) {
      return result;
    }

    // 按&分割成键值对数组
    const pairs = queryString.split('&');

    for (const pair of pairs) {
      // 按=分割键和值
      const [key, value] = pair.split('=');

      if (key) {
        // 解码URL编码的键和值（处理特殊字符如%5B%5D等）
        const decodedKey = decodeURIComponent(key);
        const decodedValue = value !== undefined ? decodeURIComponent(value) : '';

        // 处理数组格式（例如 contact[key] 形式）
        // 匹配 xxx[yyy] 格式
        const bracketMatch = decodedKey.match(/^([^\[]+)\[([^\]]+)\]$/);

        if (bracketMatch) {
          // 处理对象属性，例如 contact[requestType]
          const parentKey = bracketMatch[1];
          const childKey = bracketMatch[2];

          if (!result[parentKey]) {
            result[parentKey] = {};
          }
          result[parentKey][childKey] = decodedValue;
        } else {
          // 普通键值对
          result[decodedKey] = decodedValue;
        }
      }
    }

    return result;
  }

  // 实时验证输入
  $form.find('input, textarea, select').on('blur', function () {
    validateField($(this));
  });

  // 隐私政策复选框样式优化
  $privacyCheckbox.on('change', function () {
    if ($(this).is(':checked')) {
      $(this).closest('.form-check').css('color', '#28a745');
    } else {
      $(this).closest('.form-check').css('color', '');
    }
  });

  // 表单提交验证
  $submitBtn.on('click', function (e) {
    e.preventDefault();

    // 验证所有必填字段
    let isValid = true;
    $form.find('input[required], textarea[required], select[required]').each(function () {
      if (!validateField($(this))) {
        isValid = false;
        return false; // 跳出循环
      }
    });

    if (!isValid) {
      return false;
    }

    // 验证隐私政策
    if (!$privacyCheckbox.is(':checked')) {
      showToast('请勾选同意隐私政策', 'error');
      $privacyCheckbox.focus();
      return false;
    }

    // 显示提交中状态
    const originalText = $submitBtn.html();
    $submitBtn.html('<i class="icon-spinner icon-spin"></i> 提交中...').prop('disabled', true);
    let formData = parseQueryStringToObject($form.serialize());
    console.log('提交按钮点击事件触发', formData);

    // 触发 reCAPTCHA
    var grecaptchaInput = document.getElementById('contact_captchaCode');
    grecaptchaInput.value = '';
    $.ajax({
      url: BASE_URL + '/consult/add',
      type: 'POST',
      data: formData.contact,
      success: function (res) {
        $submitBtn.html(originalText).prop('disabled', false);

        showToast(res.msg, res.code == 1 ? 'success' : 'error');
      },
      error: function (err) {
        $submitBtn.html(originalText).prop('disabled', false);
        showToast('提交失败，请稍后重试', 'error');
      }
    })
    

  });

  // 优化隐私政策链接
  setTimeout(function () {
    $('label[for="contact_privacy"] a').attr('target', '_blank').css({
      'color': '#007bff',
      'text-decoration': 'underline',
      'cursor': 'pointer'
    });
  }, 100);
});
