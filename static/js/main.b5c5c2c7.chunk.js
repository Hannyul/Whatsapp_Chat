(this.webpackJsonpwhatsapp_chat=this.webpackJsonpwhatsapp_chat||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),s=(n(12),n(2)),i=n(3),h=n(5),l=n(4),u=(n(13),n(0)),j=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={errors:""},t.handleInputChange=function(e){var n=e.target.value.replace(/\s/g,"");/^((\+|00)?966|0?)(5\d{8})$/.test(n)?(t.setState({errors:""}),t.props.phoneFormat(n)):t.setState({errors:"Please Enter a Valid Saudi Number"})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{className:"form-design",children:[Object(u.jsx)("label",{children:"Mobile: "}),Object(u.jsx)("input",{type:"text",name:"phone",onChange:this.handleInputChange})]}),Object(u.jsx)("p",{className:"error",children:this.state.errors})]})}}]),n}(a.Component);var p=function(t){return Object(u.jsx)("a",{href:"http://wa.me/"+t.formattedPhone,className:"btn",children:"Start Chat!"})},b=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={formattedPhone:""},t.phoneFormat=function(e){var n=/^(\+?966)/.test(e)?e:"966"+e.slice(e.indexOf("5"),e.length);t.setState({formattedPhone:n})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{phoneFormat:this.phoneFormat}),this.state.formattedPhone?Object(u.jsx)(p,{formattedPhone:this.state.formattedPhone}):null]})}}]),n}(a.Component),d=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:"https://gfx4arab.com/wp-content/uploads/2020/06/whatsapp-glyph-black.svg",className:"App-logo",alt:"logo"}),Object(u.jsx)(b,{}),Object(u.jsx)("footer",{children:"*Just Paste/Write the number to be directed to WhatsApp."})]})}}]),n}(a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.b5c5c2c7.chunk.js.map