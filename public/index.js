!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(t,n,r,o,i,c,u,l){var a=r.handleCardClick,s=c.deleteElement,p=u.removeLike,f=l.setLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t,this._template=n,this._handleCardClick=a,this._userId=o,this._cardId=i.owner._id,this._deleteElement=s,this._removeLike=p,this._setLike=f,this._likes=t.likes}var t,n,o;return t=e,(n=[{key:"_getCard",value:function(){var e=document.querySelector(".".concat(this._template)).content.querySelector(".element").cloneNode(!0);return this._elementImage=e.querySelector(".element__image"),this._elementTitle=e.querySelector(".element__title"),this._cardElmentLike=e.querySelector(".element__button-like"),e}},{key:"_likeCard",value:function(){this._cardElmentLike.classList.contains("element__button-like_active")?(this._removeLike(),this.cardElemnt.querySelector(".element__counter").textContent=this._likes.length-=1,this._cardElmentLike.classList.remove("element__button-like_active")):(this._cardElmentLike.classList.add("element__button-like_active"),this._setLike(),this.cardElemnt.querySelector(".element__counter").textContent=this._likes.length+=1)}},{key:"_delete",value:function(){this._deleteElement()}},{key:"removeCard",value:function(){this.cardElemnt.remove(),this.cardElemnt=null}},{key:"_eventListeners",value:function(){var e=this;this._cardElmentLike.addEventListener("click",(function(){return e._likeCard()})),this.cardElemnt.querySelector(".element__trashs").addEventListener("click",(function(){return e._delete()})),this._elementImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"renderTemplate",value:function(){var e=this;return this.cardElemnt=this._getCard(),this._elementTitle.textContent=this._item.name,this._elementImage.src=this._item.link,this._elementImage.alt=this._item.name,this.cardElemnt.querySelector(".element__counter").textContent=this._likes.length,this._likes.forEach((function(t){t._id===e._userId&&e._cardElmentLike.classList.add("element__button-like_active")})),this._cardId===this._userId&&(this.cardElemnt.querySelector(".element__trashs").style.display="block"),this._eventListeners(),this.cardElemnt}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._selectors=t,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass}var t,n,r;return t=e,(n=[{key:"_renderErrors",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t}},{key:"_removeErrors",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkValidation",value:function(e){e.validity.valid?this._removeErrors(e):this._renderErrors(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._form.querySelectorAll(this._selectors.inputSelector)),n=this._form.querySelector(this._selectors.submitButtonSelector);this._handleButton(t,n),t.forEach((function(r){r.addEventListener("input",(function(){e._checkValidation(r),e._handleButton(t,n)}))}))}},{key:"_handleButton",value:function(e,t){this._hasInvalidInput(e)?t.classList.add(this._inactiveButtonClass):t.classList.remove(this._inactiveButtonClass)}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"cleaningForms",value:function(){var e=this;this._form.querySelectorAll(".error").forEach((function(e){e.textContent=""})),this._form.querySelectorAll(this._selectors.inputSelector).forEach((function(t){t.classList.remove(e._selectors.inputErrorClass)}))}}])&&i(t.prototype,n),r&&i(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n,this._containerSelector=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"renderItem",value:function(e){var t=this;e.forEach((function(e){t._addItem(t._renderer(e))}))}},{key:"_addItem",value:function(e){this._containerSelector.append(e)}}])&&u(t.prototype,n),r&&u(t,r),e}();n(0);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n=t.profileTitle,r=t.profileSubtitle;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileTitle=document.querySelector(n),this._profileSubtitle=document.querySelector(r)}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.profileName=this._profileTitle.textContent,e.info=this._profileSubtitle.textContent,e}},{key:"setUserInfo",value:function(e){this._profileTitle.textContent=e.profileName,this._profileSubtitle.textContent=e.info}}])&&a(t.prototype,n),r&&a(t,r),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscape=this._handleEscClose.bind(this)}var t,n,r;return t=e,(n=[{key:"_handleEscClose",value:function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");this.close(t)}}},{key:"open",value:function(){document.addEventListener("keyup",this._handleEscape),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscape)}},{key:"_closeByOverlayClick",value:function(e){var t=document.querySelector(".popup_opened");e.target.classList.contains("popup")&&this.close(t)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){return e._closeByOverlayClick(t)}))}}])&&p(t.prototype,n),r&&p(t,r),e}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,o=v(i);function i(e,t){var n,r=e.submitCallBack;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,t))._submitCallBack=r,n._formSelector=n._popup.querySelector(".popup__form"),n}return t=i,(n=[{key:"_getInputValues",value:function(){var e=this;return this._popupInputs=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._popupInputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;_(b(i.prototype),"setEventListeners",this).call(this),this._formSelector.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallBack(e._getInputValues())}))}},{key:"close",value:function(){_(b(i.prototype),"close",this).call(this)}},{key:"open",value:function(){_(b(i.prototype),"open",this).call(this)}}])&&d(t.prototype,n),r&&d(t,r),i}(f),S=document.querySelector(".profile__edit-button"),E=(document.querySelector(".popup"),document.querySelector(".popup__input_name")),g=document.querySelector(".popup__input_job"),C=document.querySelector(".popup__container"),L=document.querySelector(".popup__vector"),w=document.querySelector(".profile__button-add"),O=document.querySelector(".popup-pluse"),q=document.querySelector(".elements"),j=document.querySelector(".popup-pluse__vector"),R=document.querySelector(".popup-pluse__input"),P=document.querySelector(".popup-pluse__input-link"),x=document.querySelector(".popup-pluse__container"),I=document.querySelector(".popup__vector-element"),T=document.querySelector(".popup-pluse__button"),B=document.querySelector(".popup__button"),D=(document.querySelector(".popup-element"),document.querySelector(".profile__avatar")),V=document.querySelector(".popup-avatar__vector"),U=document.querySelector(".popup-avatar__container"),A=document.querySelector(".popup-avatar__button"),N=document.querySelector(".popup-avatar__input-link"),M=(document.querySelector(".element__trashs"),document.querySelector(".profile__title")),F=document.querySelector(".profile__subtitle"),J=document.querySelector(".profile__avatar-overlay"),H=document.querySelector(".popup-delete__vector"),z=document.querySelector(".popup-delete__button"),G=document.querySelector(".loading"),K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t,n){return(X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ee(e);if(t){var o=ee(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(i,e);var t,n,r,o=Z(i);function i(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e))._popupElementImage=t,r._popupElementText=n,r}return t=i,(n=[{key:"open",value:function(e,t){X(ee(i.prototype),"open",this).call(this),this._popup.querySelector(this._popupElementImage).src=e,this._popup.querySelector(this._popupElementText).textContent=t,this._popup.querySelector(this._popupElementImage).alt=t}},{key:"close",value:function(){X(ee(i.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){X(ee(i.prototype),"setEventListeners",this).call(this)}}])&&W(t.prototype,n),r&&W(t,r),i}(f);function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re=function(){function e(t){var n=t.url,r=t.headers,o=void 0===r?{}:r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=n,this.headers=o}var t,n,r;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(e.statusText)}},{key:"_handleResponseError",value:function(e){return Promise.reject(e.message)}},{key:"getInitialCards",value:function(){return fetch("http://localhost:3000/cards",{headers:{"Content-Type":"application/json"}}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"addCard",value:function(e){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.profileName,about:e.info})}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"setLike",value:function(e){return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"removeLike",value:function(e){return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError)}}])&&ne(t.prototype,n),r&&ne(t,r),e}();function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=pe(e);if(t){var o=pe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return le(this,n)}}function le(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?ae(e):t}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t,n){return(se="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=pe(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(i,e);var t,n,r,o=ue(i);function i(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(ae(n=o.call(this,e)),"setEventListeners",(function(e){se((t=ae(n),pe(i.prototype)),"setEventListeners",t).call(t),e.preventDefault(),n._submitCallBack()})),n._formSelector=n._popup.querySelector(".popup__form"),n}return t=i,(n=[{key:"close",value:function(){se(pe(i.prototype),"close",this).call(this),this._formSelector.removeEventListener("submit",this.setEventListeners)}},{key:"open",value:function(){se(pe(i.prototype),"open",this).call(this),this._formSelector.addEventListener("submit",this.setEventListeners)}},{key:"submitCallBack",value:function(e){this._submitCallBack=e}}])&&ie(t.prototype,n),r&&ie(t,r),i}(f);console.log("fdfgsgd");console.log("ewrfegfsg");var he=new re({url:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{"Content-Type":"application/json",authorization:"8ed74a04-ed04-4c07-90fb-2948fe98949f"}});G.textContent="Загрузка...";var de=new fe(".popup-delete");Promise.all([he.getUserInfo(),he.getInitialCards()]).then((function(e){function t(e){var t=new o(e,"element-template",{handleCardClick:function(){ye.open(e.link,e.name)}},"8f1f4c5f62257224904b0b69",e,{deleteElement:function(){de.submitCallBack((function(){z.textContent="Удаление...",he.deleteCard(e._id).then((function(){de.close(),t.removeCard(),z.textContent="Да"}))})),de.open()}},{removeLike:function(){he.removeLike(e._id)}},{setLike:function(){console.log(e._id),console.log(e),he.setLike(e._id)}});return t.renderTemplate()}M.textContent=e[0].name,F.textContent=e[0].about,D.src=e[0].avatar;var n=new k({submitCallBack:function(e){T.textContent="Создание...",he.addCard(e).then((function(e){q.prepend(t(e)),T.textContent="Создать",n.close(O)})).catch((function(e){console.log(e)}))}},".popup-pluse");new l({renderer:function(e){return t(e)}},".elements").renderItem(e[1]),G.textContent="",n.setEventListeners(),w.addEventListener("click",(function(){n.open(),R.value="",P.value="",be.cleaningForms(),T.classList.add(K.inactiveButtonClass)})),j.addEventListener("click",(function(){n.close()})),H.addEventListener("click",(function(){de.close()}))})).catch((function(e){console.log(e)}));var _e=new k({submitCallBack:function(e){A.textContent="Создание...",he.changeAvatar(e["avatar-link"]).then((function(e){D.src=e.avatar,_e.close(),A.textContent="Создать"})).catch((function(e){console.log(e)}))}},".popup-avatar");_e.setEventListeners(),J.addEventListener("click",(function(){_e.open(),A.classList.add(K.inactiveButtonClass),N.value="",Se.cleaningForms()})),V.addEventListener("click",(function(){_e.close()}));var ye=new te(".popup-element",".popup__element-image",".popup__element-text");ye.setEventListeners(),S.addEventListener("click",(function(){me.open(),ke.cleaningForms(),B.classList.remove(K.inactiveButtonClass),E.value=ve.getUserInfo().profileName,g.value=ve.getUserInfo().info})),L.addEventListener("click",(function(){me.close()})),I.addEventListener("click",(function(){ye.close()}));var ve=new s({profileTitle:".profile__title",profileSubtitle:".profile__subtitle"}),me=new k({submitCallBack:function(e){B.textContent="Сохранение...",he.changeUserInfo(e).then((function(){ve.setUserInfo(e),me.close(),B.textContent="Сохранить"})).catch((function(e){console.log(e)}))}},".popup");me.setEventListeners();var be=new c(K,x);be.enableValidation();var ke=new c(K,C);ke.enableValidation();var Se=new c(K,U);Se.enableValidation()}]);