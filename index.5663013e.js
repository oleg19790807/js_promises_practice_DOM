function e(e,t){var n=document.createElement("div");n.className=t,n.setAttribute("data-qa","notification"),n.textContent=e,document.body.appendChild(n)}new Promise(function(e,t){var n=function(t){0===t.button&&(document.removeEventListener("click",n),e("First promise was resolved"))};document.addEventListener("click",n),setTimeout(function(){document.removeEventListener("click",n),t("First promise was rejected")},3e3)}).then(function(t){return e(t,"success")}).catch(function(t){return e(t,"error")}),new Promise(function(e){var t=function(n){(0===n.button||2===n.button)&&(document.removeEventListener("click",t),e("Second promise was resolved"))};document.addEventListener("click",t)}).then(function(t){return e(t,"success")}),new Promise(function(e){var t=!1,n=!1,c=function(o){0===o.button&&(t=!0),2===o.button&&(n=!0),t&&n&&(document.removeEventListener("click",c),e("Third promise was resolved"))};document.addEventListener("click",c)}).then(function(t){return e(t,"success")}),document.addEventListener("contextmenu",function(e){return e.preventDefault()});
//# sourceMappingURL=index.5663013e.js.map