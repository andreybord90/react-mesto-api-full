(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(10),s=a.n(c),r=(a(18),a(13)),i=a(3),u=a(2),l=a.p+"static/media/__logo.03b78ada.svg",p=a(0);var d=function(e){var t=e.loggedIn,a=e.location,n=e.onLogout,o=e.email,c="",s="";return"/sign-in"===a&&(c="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",s="/sign-up"),"/sign-up"===a&&(c="\u0412\u043e\u0439\u0442\u0438",s="/sign-in"),t&&"/"===a&&(c="\u0412\u044b\u0439\u0442\u0438"),Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e"}),Object(p.jsxs)("div",{className:"header__wrapper",children:[t&&o&&Object(p.jsx)("div",{className:"header__email",children:o}),Object(p.jsx)("a",{className:"auth__button-enter",href:s,onClick:t?n:null,children:c})]})]})};var m=function(e){var t,a=e.card,n=e.onCardClick,o=e.onCardLike,c=e.onCardDelete,s=e.currentUser,r=a.owner._id===s._id,i="".concat(r?"element__delete":"element__delete_none"),u=a.likes.some((function(e){return e._id===s._id})),l="".concat(u?"element__like element__like_active":"element__like");return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"element",children:[Object(p.jsx)("button",{className:i,type:"button",onClick:function(){c(a)}}),Object(p.jsx)("div",{className:"element__image-container",children:Object(p.jsx)("img",{className:"element__image",src:a.link,alt:a.name,onClick:function(){n(a)}})}),Object(p.jsxs)("div",{className:"element__info",children:[Object(p.jsx)("h2",{className:"element__name",children:a.name}),Object(p.jsxs)("div",{className:"element__wrapper-like",children:[Object(p.jsx)("button",{className:l,type:"button",onClick:function(){o(a)}}),Object(p.jsx)("p",{className:"element__count-like",children:null===(t=a.likes)||void 0===t?void 0:t.length})]})]})]})})};var h=function(e){var t=e.cards,a=e.onEditProfile,n=e.onAddPlace,o=e.onEditAvatar,c=e.onCardClick,s=e.onCardLike,r=e.onCardDelete,i=e.currentUser;return console.log("cards MAIN",t),Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("button",{className:"profile__edit-avatar",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430",onClick:o,children:Object(p.jsx)("img",{className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440",src:i.avatar})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__wrapper",children:[Object(p.jsx)("h1",{className:"profile__name",children:null===i||void 0===i?void 0:i.name}),Object(p.jsx)("button",{className:"profile__button",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:a})]}),Object(p.jsx)("p",{className:"profile__job",children:i.about})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442",onClick:n})]}),Object(p.jsx)("section",{className:"elements",children:null===t||void 0===t?void 0:t.map((function(e){return Object(p.jsx)(m,{card:e,onCardClick:c,onCardLike:s,onCardDelete:r,currentUser:i},e._id)}))})]})};var j=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__text",children:"2021 Mesto Russia"})})};var _=function(e){var t=e.name,a=e.title,n=e.isOpen,o=e.onClose,c=e.children,s=e.useClosePopup,r=e.useClosePopupByEscape,i=e.onSubmit;return s("popup_opened","popup__exit",o,n),r(n),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(n?"popup_opened":""," "),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{className:"popup__exit popup__exit_type_".concat(t),type:"button"}),Object(p.jsxs)("form",{className:"popup__form popup__form_type_".concat(t),name:"popup__form",noValidate:!0,onSubmit:i,children:[Object(p.jsxs)("h2",{className:"popup__title ",children:[" ",a]}),c]})]})})})};var b=function(e){var t=e.isOpen,a=e.onClose,n=e.useClosePopup,c=e.useClosePopupByEscape,s=e.onUpdateUser,r=e.currentUser,u=o.a.useState(""),l=Object(i.a)(u,2),d=l[0],m=l[1],h=o.a.useState(""),j=Object(i.a)(h,2),b=j[0],f=j[1];return o.a.useEffect((function(){m(r.name),f(r.about)}),[r,t]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(_,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a,useClosePopup:n,useClosePopupByEscape:c,onSubmit:function(e){e.preventDefault(),s({name:d,about:b})},children:[Object(p.jsx)("input",{type:"text",className:"popup__text popup__text_type_name",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",id:"name",value:d||"",onChange:function(e){m(e.target.value)}}),Object(p.jsx)("span",{className:"popup__text-error",id:"name-error"}),Object(p.jsx)("input",{type:"text",className:"popup__text popup__text_type_job",name:"about",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",id:"job",value:b||"",onChange:function(e){f(e.target.value)}}),Object(p.jsx)("span",{className:"popup__text-error",id:"job-error"}),Object(p.jsx)("button",{className:"popup__button",type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var f=function(e){var t=e.isOpen,a=e.onClose,n=e.useClosePopup,c=e.useClosePopupByEscape,s=e.onUpdateAvatar,r=o.a.useRef();return o.a.useEffect((function(){t||(r.current.value="")}),[t]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(_,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:a,useClosePopup:n,useClosePopupByEscape:c,onSubmit:function(e){e.preventDefault(),s({avatar:r.current.value})},children:[Object(p.jsx)("input",{type:"url",className:"popup__text popup__text_type_avatar",name:"avatar",required:!0,minLength:"2",autoComplete:"off",id:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:r}),Object(p.jsx)("span",{className:"popup__text-error",id:"avatar-error"}),Object(p.jsx)("button",{className:"popup__button popup__button_type_avatar",type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var O=function(e){var t=e.isOpen,a=e.onClose,n=e.useClosePopup,c=e.useClosePopupByEscape,s=e.onAddPlace,r=o.a.useState(""),u=Object(i.a)(r,2),l=u[0],d=u[1],m=o.a.useState(""),h=Object(i.a)(m,2),j=h[0],b=h[1];return o.a.useEffect((function(){t||(d(""),b(""))}),[t]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(_,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:a,useClosePopup:n,useClosePopupByEscape:c,onSubmit:function(e){e.preventDefault(),s({name:l,link:j})},children:[Object(p.jsx)("input",{type:"text",className:"popup__text popup__text_type_sign",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",id:"sign",autoComplete:"off",value:l||"",onChange:function(e){d(e.target.value)}}),Object(p.jsx)("span",{className:"popup__text-error",id:"sign-error"}),Object(p.jsx)("input",{autoComplete:"off",type:"url",className:"popup__text popup__text_type_url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"url",value:j||"",onChange:function(e){b(e.target.value)}}),Object(p.jsx)("span",{className:"popup__text-error",id:"url-error"}),Object(p.jsx)("button",{className:"popup__button popup__button_type_add",type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u0442\u044c",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})};var x=function(e){var t=e.card,a=e.onClose,n=e.useClosePopup,o=e.isOpen,c=e.useClosePopupByEscape;return n("popup_opened","popup__exit",a,o),c(o),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"popup popup_type_image ".concat(t.link?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(p.jsx)("button",{className:"popup__exit popup__exit_type_image",type:"button"}),Object(p.jsx)("div",{className:"popup__wrapper-image",name:"popup__image",children:Object(p.jsx)("img",{src:t.link,alt:t.name,className:"popup__image"})}),Object(p.jsx)("h2",{className:"popup__title popup__title_type_image",children:t.name})]})})})},g=a.p+"static/media/agree.1b6082f8.svg",v=a.p+"static/media/failure.df8eddf6.svg";var C=function(e){var t=e.onClose,a=e.useClosePopup,n=e.isOpen,o=e.useClosePopupByEscape,c=e.isSuccess;return a("popup_opened","popup__exit",t,n),o(n),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"popup  ".concat(n?"popup_opened":""," "),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{className:"popup__exit popup__exit_type_auth",type:"button"}),Object(p.jsxs)("form",{className:"popup__form ",name:"popup__form",noValidate:!0,children:[Object(p.jsx)("img",{className:"popup__auth-img",src:c?g:v,alt:"\u041b\u043e\u0433\u043e"}),Object(p.jsx)("h2",{className:"popup__title_type_auth",children:c?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})})})};var y=function(e){var t=e.login,a=o.a.useState(""),n=Object(i.a)(a,2),c=n[0],s=n[1],r=o.a.useState(""),u=Object(i.a)(r,2),l=u[0],d=u[1];return Object(p.jsx)("div",{className:"auth",children:Object(p.jsx)("div",{className:"auth__wrapper",children:Object(p.jsxs)("form",{className:"auth__form",name:"auth__form",noValidate:!0,onSubmit:function(e){e.preventDefault(),c&&l&&(t({password:l,email:c}),s(""),d(""))},children:[Object(p.jsx)("h2",{className:"auth__title",children:" \u0412\u0445\u043e\u0434"}),Object(p.jsx)("input",{type:"email",className:"auth__input",name:"email",placeholder:"Email",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",id:"name",value:c||"",onChange:function(e){s(e.target.value)}}),Object(p.jsx)("span",{className:"auth__text-error",id:"email-error"}),Object(p.jsx)("input",{type:"password",className:"auth__input ",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",id:"password",value:l||"",onChange:function(e){d(e.target.value)}}),Object(p.jsx)("span",{className:"auth__text-error",id:"password-error"}),Object(p.jsx)("button",{className:"auth__button",type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",children:"\u0412\u043e\u0439\u0442\u0438"})]})})})};var N=function(e){var t=e.register,a=o.a.useState(""),n=Object(i.a)(a,2),c=n[0],s=n[1],r=o.a.useState(""),u=Object(i.a)(r,2),l=u[0],d=u[1];return Object(p.jsx)("div",{className:"auth",children:Object(p.jsx)("div",{className:"auth__wrapper",children:Object(p.jsxs)("form",{className:"auth__form",name:"auth__form",noValidate:!0,onSubmit:function(e){e.preventDefault(),t({password:l,email:c}),s(""),d("")},children:[Object(p.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f "}),Object(p.jsx)("input",{type:"email",className:"auth__input",name:"email",placeholder:"Email",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",id:"name",value:c||"",onChange:function(e){s(e.target.value)}}),Object(p.jsx)("span",{className:"auth__text-error",id:"email-error"}),Object(p.jsx)("input",{type:"password",className:"auth__input ",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",id:"password",value:l||"",onChange:function(e){d(e.target.value)}}),Object(p.jsx)("span",{className:"auth__text-error",id:"password-error"}),Object(p.jsx)("button",{className:"auth__button",type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(p.jsxs)("p",{children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(p.jsx)("a",{className:"auth__button-enter",type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430",href:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})},k=function(e){var t=e.loggedIn,a=e.children;return t?a:Object(p.jsx)(u.a,{to:"./sign-in"})},S=a(5),w=a(11),P=a(12),E=new(function(){function e(t){var a=t.url,n=t.headers;Object(w.a)(this,e),this._url=a,this._headers=n}return Object(P.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}},{key:"getCards",value:function(e){var t=this;return this._headers.authorization="Bearer ".concat(e),fetch("".concat(this._url,"/cards"),{headers:this._headers,credentials:"include",mode:"cors"}).then((function(e){return t._checkResponse(e)})).then((function(e){return e}))}},{key:"getUserInfo",value:function(e){var t=this;return this._headers.authorization="Bearer ".concat(e),fetch("".concat(this._url,"/users/me"),{headers:this._headers,credentials:"include",mode:"cors"}).then((function(e){return t._checkResponse(e)}))}},{key:"setCardLike",value:function(e,t){var a=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:Object(S.a)({authorization:"Bearer ".concat(t)},this._headers),credentials:"include",mode:"cors"}).then((function(e){return a._checkResponse(e)}))}},{key:"removeCardLike",value:function(e,t){var a=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:Object(S.a)({authorization:"Bearer ".concat(t)},this._headers),credentials:"include",mode:"cors"}).then((function(e){return a._checkResponse(e)}))}},{key:"changeUserInfo",value:function(e,t){var a=this,n=e.name,o=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:Object(S.a)({authorization:"Bearer ".concat(t)},this._headers),credentials:"include",mode:"cors",body:JSON.stringify({name:n,about:o})}).then((function(e){return a._checkResponse(e)}))}},{key:"insertCard",value:function(e,t){var a=this,n=e.name,o=e.link;return fetch("".concat(this._url,"/cards "),{method:"POST",headers:Object(S.a)({authorization:"Bearer ".concat(t)},this._headers),credentials:"include",mode:"cors",body:JSON.stringify({name:n,link:o})}).then((function(e){return a._checkResponse(e)}))}},{key:"deleteCard",value:function(e,t){var a=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:Object(S.a)({authorization:"Bearer ".concat(t)},this._headers),credentials:"include",mode:"cors"}).then((function(e){return a._checkResponse(e)}))}},{key:"updateUserAvatar",value:function(e,t){var a=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:Object(S.a)({authorization:"Bearer ".concat(t)},this._headers),credentials:"include",mode:"cors",body:JSON.stringify({avatar:e})}).then((function(e){return a._checkResponse(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.setCardLike(e):this.removeCardLike(e)}}]),e}())({url:"https://api.andrey.students.nomoredomains.work",headers:{authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json",Accept:"application/json",Origin:"*"}}),L=o.a.createContext(),B="https://api.andrey.students.nomoredomains.work";var I=function(){var e=o.a.useState({}),t=Object(i.a)(e,2),a=t[0],c=t[1],s=o.a.useState({}),l=Object(i.a)(s,2),m=l[0],_=l[1],g=o.a.useState([]),v=Object(i.a)(g,2),S=v[0],w=v[1],P=o.a.useState(!1),I=Object(i.a)(P,2),U=I[0],A=I[1],T=o.a.useState(""),D=Object(i.a)(T,2),R=D[0],z=D[1],q=Object(u.g)(),F=Object(u.f)();Object(n.useEffect)((function(){J(F.pathname),console.log("location.pathname",F.pathname),U&&Promise.all([E.getUserInfo(localStorage.getItem("jwt")),E.getCards(localStorage.getItem("jwt"))]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];console.log("useEffecr",n),_(a),w(n)})).catch((function(e){console.log(e)}))}),[U]);var J=function(e){localStorage.getItem("jwt")&&function(e){return fetch("".concat(B,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e),Origin:"*"},mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(localStorage.getItem("jwt")).then((function(t){t&&(A(!0),q(e),z(t.email))})).catch((function(e){return console.log(e)}))},V=o.a.useState(!1),M=Object(i.a)(V,2),H=M[0],G=M[1],K=o.a.useState(!1),Q=Object(i.a)(K,2),W=Q[0],X=Q[1],Y=o.a.useState(!1),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=o.a.useState(!1),ae=Object(i.a)(te,2),ne=ae[0],oe=ae[1],ce=o.a.useState(!1),se=Object(i.a)(ce,2),re=se[0],ie=se[1],ue=function(){X(!1),ee(!1),G(!1),oe(!1),c({})},le=function(e){var t=function(e){"Escape"===e.key&&ue()};Object(n.useEffect)((function(){if(e)return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[e])},pe=function(e,t,a,o){var c=function(n){(n.target.classList.contains(e)||n.target.classList.contains(t))&&a()};Object(n.useEffect)((function(){if(o)return document.addEventListener("click",c),function(e){document.removeEventListener("click",c)}}),[o])};return console.log(">>>>>>>>>",U,m),Object(p.jsx)(L.Provider,{value:{currentUser:m},children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(d,{loggedIn:U,location:F.pathname,onLogout:function(e){e.preventDefault(),localStorage.removeItem("jwt"),A(!1),q("/login")},email:R}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/sign-up",element:Object(p.jsx)(N,{register:function(e){(function(e){var t=e.password,a=e.email;return fetch("".concat(B,"/signup"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Origin:"*"},mode:"cors",credentials:"include",body:JSON.stringify({password:t,email:a})}).then((function(e){try{if(201===e.status)return e.json()}catch(t){return{e:t,message:"\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"}}})).catch((function(e){return console.log(e)}))})({password:e.password,email:e.email}).then((function(e){e?(ie(!0),oe(!0),q("/")):(ie(!1),oe(!0))})).catch((function(e){ie(!1),oe(!0),console.log(e)}))}})}),Object(p.jsx)(u.b,{path:"/sign-in",element:Object(p.jsx)(y,{login:function(e){var t=e.password,a=e.email;(function(e){var t=e.password,a=e.email;return fetch("".concat(B,"/signin"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Origin:"*"},mode:"cors",credentials:"include",body:JSON.stringify({password:t,email:a})}).then((function(e){try{if(200===e.status)return e.json()}catch(t){return t}})).catch((function(e){return console.log(e)}))})({password:t,email:a}).then((function(e){e?(localStorage.setItem("jwt",e.token),A(!0),z(a),q("/")):(ie(!1),oe(!0))})).catch((function(e){ie(!1),oe(!0),console.log(e)}))}})}),Object(p.jsx)(u.b,{exact:!0,path:"/",element:Object(p.jsx)(k,{loggedIn:U,children:Object(p.jsx)(h,{onEditProfile:function(){X(!W)},onAddPlace:function(){ee(!$)},onEditAvatar:function(){G(!H)},onCardClick:function(e){c(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===m._id}));E.changeLikeCardStatus(e._id,!t).then((function(t){w((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){E.deleteCard(e._id,localStorage.getItem("jwt")).then((function(){w((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))},currentUser:m,cards:S})})}),Object(p.jsx)(u.b,{path:"*",element:Object(p.jsx)(u.a,{to:"/"})})]}),Object(p.jsx)(j,{})]}),Object(p.jsx)(b,{isOpen:W,onClose:ue,useClosePopup:pe,useClosePopupByEscape:le,onUpdateUser:function(e){var t=e.name,a=e.about;E.changeUserInfo({name:t,about:a},localStorage.getItem("jwt")).then((function(e){_(e),ue()})).catch((function(e){console.log(e)}))},currentUser:m}),Object(p.jsx)(f,{isOpen:H,onClose:ue,useClosePopup:pe,useClosePopupByEscape:le,onUpdateAvatar:function(e){var t=e.avatar;E.updateUserAvatar(t,localStorage.getItem("jwt")).then((function(e){_(e),ue()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(O,{isOpen:$,onClose:ue,useClosePopup:pe,useClosePopupByEscape:le,onAddPlace:function(e){E.insertCard(e,localStorage.getItem("jwt")).then((function(e){w([e].concat(Object(r.a)(S))),ue()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(C,{isOpen:ne,onClose:ue,useClosePopup:pe,useClosePopupByEscape:le,isSuccess:re}),Object(p.jsx)(x,{card:a,onClose:ue,useClosePopup:pe,useClosePopupByEscape:le,isOpen:Boolean(Object.keys(a).length)})]})})},U=a(8);s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(U.a,{children:Object(p.jsx)(I,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ce510d2a.chunk.js.map