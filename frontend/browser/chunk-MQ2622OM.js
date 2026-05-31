import{g as Ie}from"./chunk-B6R2PQJZ.js";import{a as Te,b as Se}from"./chunk-NGRAFBEB.js";import{a as Re,b as Ve}from"./chunk-42P7IVF3.js";import{a as Oe}from"./chunk-EEYZ23GY.js";import{a as be,b as he,c as fe,d as ve,g as Ce,i as xe,m as ye,o as Me}from"./chunk-ODUTZBMU.js";import{X as ke,Y as H,_ as L,aa as j,ba as K,ca as f,da as Z,la as Ee,pa as Pe,ra as we}from"./chunk-FEZPYH5L.js";import{c as J,e as X,j as _e,o as N}from"./chunk-ZMHTAFOW.js";import{$b as q,Aa as oe,Ec as ge,Gb as g,Hb as r,Ib as a,Ic as me,Jb as p,Mc as z,Nb as v,Ob as C,Qb as _,Ub as d,Uc as B,Vb as l,Wb as D,Xa as re,Xb as A,Y as ie,Ya as c,Yb as de,Z as w,Zb as ce,_ as O,_b as U,aa as T,ca as h,cc as te,dc as se,ec as k,fb as ae,fc as W,gc as y,ha as s,hc as M,ia as u,ic as ue,kb as S,lb as R,mb as le,nc as Q,ob as V,oc as G,pa as $,pb as I,pc as Y,qb as x,sc as P,tc as pe,wa as ee,ya as E,yb as F}from"./chunk-ZGK3T7SK.js";var Fe=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var We=["icon"],Qe=["*"];function Ge(t,o){if(t&1&&p(0,"span",4),t&2){let e=l(2);y(e.cx("icon")),g("ngClass",e.icon)("pBind",e.ptm("icon"))}}function Ye(t,o){if(t&1&&(v(0),x(1,Ge,1,4,"span",3),C()),t&2){let e=l();c(),g("ngIf",e.icon)}}function Je(t,o){}function Xe(t,o){t&1&&x(0,Je,0,0,"ng-template")}function Ke(t,o){if(t&1&&(r(0,"span",2),x(1,Xe,1,0,null,5),a()),t&2){let e=l();y(e.cx("icon")),g("pBind",e.ptm("icon")),c(),g("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var Ze={root:({instance:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},De=(()=>{class t extends L{name="tag";style=Fe;classes=Ze;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();var Ae=new T("TAG_INSTANCE"),et=(()=>{class t extends K{$pcTag=h(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=h(De);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="icon"&&(this._iconTemplate=e.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=S({type:t,selectors:[["p-tag"]],contentQueries:function(i,n,m){if(i&1&&de(m,We,4)(m,ke,4),i&2){let b;U(b=q())&&(n.iconTemplate=b.first),U(b=q())&&(n.templates=b)}},hostVars:3,hostBindings:function(i,n){i&2&&(F("data-p",n.dataP),y(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",B]},features:[P([De,{provide:Ae,useExisting:t},{provide:j,useExisting:t}]),V([f]),I],ngContentSelectors:Qe,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(D(),A(0),x(1,Ye,2,1,"ng-container",0)(2,Ke,2,4,"span",1),r(3,"span",2),M(4),a()),i&2&&(c(),g("ngIf",!n.iconTemplate&&!n._iconTemplate),c(),g("ngIf",n.iconTemplate||n._iconTemplate),c(),y(n.cx("label")),g("pBind",n.ptm("label")),c(),ue(n.value))},dependencies:[N,J,X,_e,H,f],encapsulation:2,changeDetection:0})}return t})(),Ut=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=O({imports:[et,H,H]})}return t})();var Be=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var tt=`
    ${Be}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,nt={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},Ne=(()=>{class t extends L{name="textarea";style=tt;classes=nt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();var He=new T("TEXTAREA_INSTANCE"),dn=(()=>{class t extends Oe{bindDirectiveInstance=h(f,{self:!0});$pcTextarea=h(He,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=z();pTextareaUnstyled=z();autoResize;pSize;variant=z();fluid=z(void 0,{transform:B});invalid=z(void 0,{transform:B});$variant=me(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new $;ngControlSubscription;_componentStyle=h(Ne);ngControl=h(fe,{optional:!0,self:!0});pcFluid=h(Ee,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),ee(()=>{let e=this.pTextareaPT();e&&this.directivePT.set(e)}),ee(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=le({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(i,n){i&1&&d("input",function(b){return n.onInput(b)}),i&2&&y(n.cx("root"))},inputs:{pTextareaPT:[1,"pTextareaPT"],pTextareaUnstyled:[1,"pTextareaUnstyled"],autoResize:[2,"autoResize","autoResize",B],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[P([Ne,{provide:He,useExisting:t},{provide:j,useExisting:t}]),V([f]),I]})}return t})(),cn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=O({})}return t})();var it=["editorArea"],ot=[[["","toolbar-extra",""]]],rt=["[toolbar-extra]"],at=()=>({width:"420px",maxWidth:"95vw"});function lt(t,o){if(t&1){let e=_();v(0),r(1,"button",18),d("click",function(){s(e);let n=l(2);return u(n.undo())}),p(2,"i",19),a(),r(3,"button",20),d("click",function(){s(e);let n=l(2);return u(n.redo())}),p(4,"i",21),a(),p(5,"span",22),C()}}function dt(t,o){if(t&1){let e=_();v(0),r(1,"button",23),d("click",function(){s(e);let n=l(2);return u(n.execCommand("bold"))}),p(2,"i",24),a(),r(3,"button",25),d("click",function(){s(e);let n=l(2);return u(n.execCommand("italic"))}),p(4,"i",26),a(),r(5,"button",27),d("click",function(){s(e);let n=l(2);return u(n.execCommand("underline"))}),p(6,"i",28),a(),r(7,"button",29),d("click",function(){s(e);let n=l(2);return u(n.execCommand("strikeThrough"))}),p(8,"i",30),a(),p(9,"span",22),C()}if(t&2){let e=l(2);c(),k("active",e.isBold),c(2),k("active",e.isItalic),c(2),k("active",e.isUnderline),c(2),k("active",e.isStrikethrough)}}function ct(t,o){if(t&1){let e=_();v(0),r(1,"button",31),d("click",function(){s(e);let n=l(2);return u(n.insertHeading(1))}),p(2,"i",32),a(),r(3,"button",33),d("click",function(){s(e);let n=l(2);return u(n.insertHeading(2))}),p(4,"i",34),a(),r(5,"button",35),d("click",function(){s(e);let n=l(2);return u(n.insertHeading(3))}),p(6,"i",36),a(),r(7,"button",37),d("click",function(){s(e);let n=l(2);return u(n.formatParagraph())}),p(8,"i",38),a(),p(9,"span",22),C()}}function st(t,o){if(t&1){let e=_();v(0),r(1,"button",39),d("click",function(){s(e);let n=l(2);return u(n.insertList("insertUnorderedList"))}),p(2,"i",40),a(),r(3,"button",41),d("click",function(){s(e);let n=l(2);return u(n.insertList("insertOrderedList"))}),p(4,"i",42),a(),p(5,"span",22),C()}}function ut(t,o){if(t&1){let e=_();v(0),r(1,"button",43),d("click",function(){s(e);let n=l(2);return u(n.execCommand("justifyLeft"))}),p(2,"i",44),a(),r(3,"button",45),d("click",function(){s(e);let n=l(2);return u(n.execCommand("justifyCenter"))}),p(4,"i",46),a(),r(5,"button",47),d("click",function(){s(e);let n=l(2);return u(n.execCommand("justifyRight"))}),p(6,"i",48),a(),p(7,"span",22),C()}}function pt(t,o){if(t&1){let e=_();v(0),r(1,"button",49),d("click",function(){s(e);let n=l(2);return u(n.insertTable())}),p(2,"i",50),a(),r(3,"button",51),d("click",function(){s(e);let n=l(2);return u(n.insertBlockquote())}),p(4,"i",52),a(),r(5,"button",53),d("click",function(){s(e);let n=l(2);return u(n.insertCodeBlock())}),p(6,"i",54),a(),r(7,"button",55),d("click",function(){s(e);let n=l(2);return u(n.insertHR())}),p(8,"i",56),a(),p(9,"span",22),C()}}function gt(t,o){if(t&1){let e=_();v(0),r(1,"button",57),d("click",function(){s(e);let n=l(2);return u(n.insertLink())}),p(2,"i",58),a(),C()}}function mt(t,o){if(t&1){let e=_();v(0),r(1,"button",59),d("click",function(){s(e);let n=te(4);return u(n.click())}),p(2,"i",60),a(),r(3,"input",61,2),d("change",function(n){s(e);let m=l(2);return u(m.onImageUpload(n))}),a(),C()}}function _t(t,o){if(t&1){let e=_();v(0),r(1,"button",62),d("click",function(){s(e);let n=l(2);return u(n.openMediaDialog())}),p(2,"i",63),a(),C()}}function bt(t,o){if(t&1){let e=_();v(0),r(1,"button",64),d("click",function(){s(e);let n=l(2);return u(n.clearFormatting())}),p(2,"i",65),a(),C()}}function ht(t,o){if(t&1){let e=_();r(0,"div",14),d("mousedown",function(n){return n.preventDefault()}),x(1,lt,6,0,"ng-container",15)(2,dt,10,8,"ng-container",15)(3,ct,10,0,"ng-container",15)(4,st,6,0,"ng-container",15)(5,ut,8,0,"ng-container",15)(6,pt,10,0,"ng-container",15)(7,gt,3,0,"ng-container",15)(8,mt,5,0,"ng-container",15)(9,_t,3,0,"ng-container",15)(10,bt,3,0,"ng-container",15),A(11),r(12,"button",16),d("click",function(){s(e);let n=l();return u(n.toggleFullscreen())}),p(13,"i",17),a()()}if(t&2){let e=l();c(),g("ngIf",e.toolbar.history),c(),g("ngIf",e.toolbar.textFormat),c(),g("ngIf",e.toolbar.headings),c(),g("ngIf",e.toolbar.lists),c(),g("ngIf",e.toolbar.alignment),c(),g("ngIf",e.toolbar.blocks),c(),g("ngIf",e.toolbar.link),c(),g("ngIf",e.toolbar.image),c(),g("ngIf",e.toolbar.audio),c(),g("ngIf",e.toolbar.clear),c(2),g("title",e.isFullscreen?"Exit fullscreen":"Fullscreen"),c(),g("ngClass",e.isFullscreen?"ms-fullscreen_exit":"ms-fullscreen")}}function ft(t,o){if(t&1){let e=_();r(0,"label",12),M(1," Audio / video URL "),r(2,"input",66),Y("ngModelChange",function(n){s(e);let m=l();return G(m.mediaUrl,n)||(m.mediaUrl=n),u(n)}),a()()}if(t&2){let e=l();c(2),Q("ngModel",e.mediaUrl)}}function vt(t,o){t&1&&(r(0,"span",71),M(1,"\u2713 File loaded"),a())}function Ct(t,o){if(t&1){let e=_();r(0,"div",12),M(1," Choose file "),r(2,"div",67)(3,"button",68),d("click",function(){s(e);let n=te(6);return u(n.click())}),a(),x(4,vt,2,0,"span",69),a(),r(5,"input",70,3),d("change",function(n){s(e);let m=l();return u(m.onMediaFileSelected(n))}),a()()}if(t&2){let e=l();c(4),g("ngIf",e.pendingMediaFile)}}function xt(t,o){if(t&1){let e=_();r(0,"button",72),d("click",function(){s(e);let n=l();return u(n.showMediaDialog=!1)}),a(),r(1,"button",73),d("click",function(){s(e);let n=l();return u(n.insertMedia())}),a()}if(t&2){let e=l();c(),g("disabled",e.mediaMode==="url"&&!e.mediaUrl.trim()||e.mediaMode==="upload"&&!e.pendingMediaFile)}}var yt={history:!0,textFormat:!0,headings:!0,lists:!0,alignment:!0,blocks:!0,link:!0,image:!0,audio:!0,clear:!0},Le=class t{constructor(o){this.hostRef=o}editorAreaRef;placeholder="";editorHeight="120px";maxHeight="";toolbar=yt;readOnly=!1;contentChange=new $;isFullscreen=!1;isBold=!1;isItalic=!1;isUnderline=!1;isStrikethrough=!1;savedRange=null;restoringSelection=!1;showMediaDialog=!1;mediaMode="url";mediaUrl="";mediaMaxPlays=null;pendingMediaFile=null;originalParent=null;originalNextSibling=null;ngOnDestroy(){this.isFullscreen&&this.exitFullscreen()}onChange=()=>{};onTouched=()=>{};innerValue="";writeValue(o){this.innerValue=o??"";let e=this.editorAreaRef?.nativeElement;e&&e.innerHTML!==this.innerValue&&(e.innerHTML=this.innerValue,this.upgradeEditorAudio())}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}onEditorInput(){let o=this.editorAreaRef?.nativeElement;o&&(this.innerValue=o.innerHTML,this.onChange(this.innerValue),this.contentChange.emit(this.innerValue),this.updateToolbarState())}onEditorFocus(){this.onTouched()}onSelectionChange(){if(this.restoringSelection)return;let o=this.editorAreaRef?.nativeElement;if(!o)return;let e=window.getSelection();e?.rangeCount&&e.anchorNode&&o.contains(e.anchorNode)&&(this.savedRange=e.getRangeAt(0).cloneRange(),this.updateToolbarState())}restoreSelection(){let o=this.editorAreaRef?.nativeElement;if(!o)return;let e=this.savedRange;if(this.restoringSelection=!0,o.focus(),e){let i=window.getSelection();i?.removeAllRanges(),i?.addRange(e)}this.restoringSelection=!1}insertHTML(o){this.readOnly||(this.editorAreaRef?.nativeElement?.focus(),document.execCommand("insertHTML",!1,o),this.syncContent())}getEditorElement(){return this.editorAreaRef?.nativeElement}focus(){this.editorAreaRef?.nativeElement?.focus()}execCommand(o,e){this.readOnly||(this.restoreSelection(),document.execCommand(o,!1,e),this.updateToolbarState(),this.syncContent())}insertHeading(o){this.readOnly||(this.restoreSelection(),document.execCommand("formatBlock",!1,`h${o}`),this.syncContent())}insertList(o){this.readOnly||(this.restoreSelection(),document.execCommand(o,!1),this.syncContent())}insertTable(){if(this.readOnly)return;this.restoreSelection();let o='style="border:1px solid #ccc;padding:6px 10px"',e=`<tr><td ${o}>&nbsp;</td><td ${o}>&nbsp;</td><td ${o}>&nbsp;</td></tr>`,i=`<table style="width:100%;border-collapse:collapse;margin:8px 0">${e}${e}${e}</table>`;document.execCommand("insertHTML",!1,i),this.syncContent()}insertBlockquote(){this.readOnly||(this.restoreSelection(),document.execCommand("formatBlock",!1,"blockquote"),this.syncContent())}insertCodeBlock(){this.readOnly||(this.restoreSelection(),document.execCommand("formatBlock",!1,"pre"),this.syncContent())}insertHR(){this.readOnly||(this.restoreSelection(),document.execCommand("insertHorizontalRule",!1),this.syncContent())}insertLink(){if(this.readOnly)return;this.restoreSelection();let o=prompt("URL:");o&&(document.execCommand("createLink",!1,o),this.syncContent())}onImageUpload(o){if(this.readOnly)return;let e=o.target,i=e.files?.[0];if(!i)return;let n=new FileReader;n.onload=()=>{let m=n.result;this.editorAreaRef?.nativeElement?.focus(),document.execCommand("insertHTML",!1,`<img src="${m}" style="max-width:100%;height:auto;border-radius:var(--radius);margin:8px 0;display:block">`),this.syncContent()},n.readAsDataURL(i),e.value=""}openMediaDialog(){this.readOnly||(this.mediaMode="url",this.mediaUrl="",this.mediaMaxPlays=null,this.pendingMediaFile=null,this.showMediaDialog=!0)}onMediaFileSelected(o){let e=o.target,i=e.files?.[0];if(!i)return;let n=new FileReader;n.onload=()=>{this.pendingMediaFile=n.result},n.readAsDataURL(i),e.value=""}insertMedia(){let o=this.mediaMode==="url"?this.mediaUrl?.trim():this.pendingMediaFile;if(!o)return;let e=this.mediaMaxPlays&&this.mediaMaxPlays>0?` data-max-plays="${this.mediaMaxPlays}"`:"",i=`<audio controls controlslist="nodownload" src="${o}" style="width:100%;margin:8px 0;display:block"${e}></audio>`;this.editorAreaRef?.nativeElement?.focus(),document.execCommand("insertHTML",!1,i),this.syncContent(),this.showMediaDialog=!1,this.upgradeEditorAudio()}clearFormatting(){this.readOnly||(this.restoreSelection(),document.execCommand("removeFormat",!1),document.execCommand("formatBlock",!1,"p"),this.updateToolbarState(),this.syncContent())}undo(){document.execCommand("undo",!1),this.syncContent()}redo(){document.execCommand("redo",!1),this.syncContent()}formatParagraph(){this.readOnly||(document.execCommand("formatBlock",!1,"p"),this.syncContent())}toggleFullscreen(){this.isFullscreen?this.exitFullscreen():this.enterFullscreen()}enterFullscreen(){let o=this.hostRef.nativeElement;this.originalParent=o.parentElement,this.originalNextSibling=o.nextSibling,document.body.appendChild(o),this.isFullscreen=!0,this.editorAreaRef?.nativeElement?.focus()}exitFullscreen(){this.isFullscreen=!1;let o=this.hostRef.nativeElement;this.originalParent&&(this.originalNextSibling?this.originalParent.insertBefore(o,this.originalNextSibling):this.originalParent.appendChild(o)),this.originalParent=null,this.originalNextSibling=null}syncContent(){let o=this.editorAreaRef?.nativeElement;if(!o)return;let e=o.cloneNode(!0);e.querySelectorAll(".cap-player").forEach(i=>{let n=i.querySelector("audio");n?(n.setAttribute("controls",""),n.style.display="block",n.removeAttribute("data-cap-upgraded"),i.replaceWith(n)):i.remove()}),this.innerValue=e.innerHTML,this.onChange(this.innerValue),this.contentChange.emit(this.innerValue)}upgradeEditorAudio(){let o=this.editorAreaRef?.nativeElement;o&&requestAnimationFrame(()=>{Ie(o,"editor",{editorMode:!0,onDelete:()=>this.syncContent()})})}updateToolbarState(){this.isBold=document.queryCommandState("bold"),this.isItalic=document.queryCommandState("italic"),this.isUnderline=document.queryCommandState("underline"),this.isStrikethrough=document.queryCommandState("strikeThrough")}static \u0275fac=function(e){return new(e||t)(ae(oe))};static \u0275cmp=S({type:t,selectors:[["app-rich-editor"]],viewQuery:function(e,i){if(e&1&&ce(it,5),e&2){let n;U(n=q())&&(i.editorAreaRef=n.first)}},hostVars:2,hostBindings:function(e,i){e&1&&d("selectionchange",function(){return i.onSelectionChange()},re),e&2&&k("fullscreen",i.isFullscreen)},inputs:{placeholder:"placeholder",editorHeight:"editorHeight",maxHeight:"maxHeight",toolbar:"toolbar",readOnly:"readOnly"},outputs:{contentChange:"contentChange"},features:[P([{provide:be,useExisting:ie(()=>t),multi:!0}])],ngContentSelectors:rt,decls:20,vars:23,consts:[["editorArea",""],["footer",""],["imageInput",""],["mediaFileInput",""],[1,"rich-editor-combined"],["class","rich-editor-toolbar",3,"mousedown",4,"ngIf"],[1,"rich-editor-area","editor-content",3,"input","focus"],["header","Insert audio","styleClass","glass-dialog",3,"visibleChange","visible","modal","focusTrap","draggable"],[1,"media-dialog-body"],[1,"media-dialog-tabs"],["type","button",1,"type-chip",3,"click"],["class","field-label",4,"ngIf"],[1,"field-label"],["type","number","min","0","placeholder","Unlimited",1,"media-input",3,"ngModelChange","ngModel"],[1,"rich-editor-toolbar",3,"mousedown"],[4,"ngIf"],[1,"toolbar-btn","fullscreen-btn",3,"click","title"],[1,"ms",3,"ngClass"],["pTooltip","Undo",1,"toolbar-btn",3,"click"],[1,"ms","ms-undo"],["pTooltip","Redo",1,"toolbar-btn",3,"click"],[1,"ms","ms-refresh"],[1,"toolbar-sep"],["title","Bold",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_bold"],["title","Italic",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_italic"],["title","Underline",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_underlined"],["title","Strikethrough",1,"toolbar-btn",3,"click"],[1,"ms","ms-strikethrough_s"],["title","Heading 1",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_h1"],["title","Heading 2",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_h2"],["title","Heading 3",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_h3"],["title","Paragraph",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_paragraph"],["title","Bullet list",1,"toolbar-btn",3,"click"],[1,"ms","ms-list"],["title","Numbered list",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_list_numbered"],["title","Align left",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_align_left"],["title","Align center",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_align_center"],["title","Align right",1,"toolbar-btn",3,"click"],[1,"ms","ms-format_align_right"],["title","Insert table",1,"toolbar-btn",3,"click"],[1,"ms","ms-table"],["title","Blockquote",1,"toolbar-btn",3,"click"],[1,"ms","ms-comment"],["title","Code block",1,"toolbar-btn",3,"click"],[1,"ms","ms-code"],["title","Horizontal rule",1,"toolbar-btn",3,"click"],[1,"ms","ms-horizontal_rule"],["title","Insert link",1,"toolbar-btn",3,"click"],[1,"ms","ms-link"],["title","Insert image",1,"toolbar-btn",3,"click"],[1,"ms","ms-image"],["type","file","accept","image/*",2,"display","none",3,"change"],["title","Insert audio",1,"toolbar-btn",3,"click"],[1,"ms","ms-headphones"],["title","Clear formatting",1,"toolbar-btn",3,"click"],[1,"ms","ms-ink_eraser"],["type","url","placeholder","https://...",1,"media-input",3,"ngModelChange","ngModel"],[1,"media-file-row"],["pButton","","type","button","icon","ms ms-upload_file","label","Choose file",1,"p-button-outlined","p-button-sm",3,"click"],["class","media-file-ok",4,"ngIf"],["type","file","accept","audio/*,video/*",2,"display","none",3,"change"],[1,"media-file-ok"],["pButton","","type","button","label","Cancel",1,"p-button-text",3,"click"],["pButton","","type","button","label","Insert",3,"click","disabled"]],template:function(e,i){if(e&1){let n=_();D(ot),r(0,"div",4),x(1,ht,14,12,"div",5),r(2,"div",6,0),d("input",function(){return i.onEditorInput()})("focus",function(){return i.onEditorFocus()}),a()(),r(4,"p-dialog",7),Y("visibleChange",function(b){return s(n),G(i.showMediaDialog,b)||(i.showMediaDialog=b),u(b)}),r(5,"div",8)(6,"div",9)(7,"button",10),d("click",function(){return i.mediaMode="url"}),M(8,"URL"),a(),r(9,"button",10),d("click",function(){return i.mediaMode="upload"}),M(10,"Upload"),a()(),x(11,ft,3,1,"label",11)(12,Ct,7,1,"div",11),r(13,"label",12),M(14," Max plays "),r(15,"small"),M(16,"(0 = unlimited)"),a(),r(17,"input",13),Y("ngModelChange",function(b){return s(n),G(i.mediaMaxPlays,b)||(i.mediaMaxPlays=b),u(b)}),a()()(),x(18,xt,2,1,"ng-template",null,1,ge),a()}e&2&&(k("fullscreen",i.isFullscreen),c(),g("ngIf",!i.readOnly),c(),se("min-height",i.editorHeight)("--editor-max-height",i.isFullscreen?"none":i.maxHeight||"none"),F("contenteditable",!i.readOnly)("data-placeholder",i.placeholder),c(2),W(pe(22,at)),Q("visible",i.showMediaDialog),g("modal",!0)("focusTrap",!1)("draggable",!1),c(3),k("active",i.mediaMode==="url"),c(2),k("active",i.mediaMode==="upload"),c(2),g("ngIf",i.mediaMode==="url"),c(),g("ngIf",i.mediaMode==="upload"),c(5),Q("ngModel",i.mediaMaxPlays))},dependencies:[N,J,X,Me,he,xe,ve,ye,Ce,Se,Te,Ve,Re,we,Pe],styles:['@charset "UTF-8";.rich-editor-combined[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid rgba(var(--c-blue-600-rgb),.14);border-radius:var(--radius);overflow:hidden}.p-dark[_nghost-%COMP%]   .rich-editor-combined[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .rich-editor-combined[_ngcontent-%COMP%]{border-color:rgba(var(--c-white-rgb),.1)}.rich-editor-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;padding:6px 8px;background:var(--glass-bg-subtle);border-bottom:1px solid rgba(var(--c-blue-600-rgb),.1);flex-wrap:wrap}.p-dark[_nghost-%COMP%]   .rich-editor-toolbar[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .rich-editor-toolbar[_ngcontent-%COMP%]{border-bottom-color:rgba(var(--c-white-rgb),.08);background:rgba(var(--c-slate-950-rgb),.4)}.toolbar-btn[_ngcontent-%COMP%], [_nghost-%COMP%]     [toolbar-extra] .toolbar-btn{display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:32px;padding:0 6px;border:none;border-radius:var(--radius);background:transparent;color:var(--text-secondary);font-size:20px;font-weight:600;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent;transition:background .15s,color .15s}.toolbar-btn[_ngcontent-%COMP%]   .ms[_ngcontent-%COMP%], [_nghost-%COMP%]     [toolbar-extra] .toolbar-btn .ms{font-size:20px}.toolbar-btn[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]     [toolbar-extra] .toolbar-btn:hover{background:rgba(var(--c-blue-600-rgb),.1);color:var(--c-blue-800)}.toolbar-btn.active[_ngcontent-%COMP%], [_nghost-%COMP%]     [toolbar-extra] .toolbar-btn.active{background:rgba(var(--c-blue-600-rgb),.18);color:var(--c-blue-800)}.p-dark[_nghost-%COMP%]   .toolbar-btn[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .toolbar-btn[_ngcontent-%COMP%], .p-dark[_nghost-%COMP%]     [toolbar-extra] .toolbar-btn, .p-dark   [_nghost-%COMP%]     [toolbar-extra] .toolbar-btn{color:var(--text-hint)}.p-dark[_nghost-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]:hover, .p-dark   [_nghost-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]:hover, .p-dark[_nghost-%COMP%]     [toolbar-extra] .toolbar-btn:hover, .p-dark   [_nghost-%COMP%]     [toolbar-extra] .toolbar-btn:hover{background:rgba(var(--c-blue-400-rgb),.12);color:var(--c-blue-300)}.p-dark[_nghost-%COMP%]   .toolbar-btn.active[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .toolbar-btn.active[_ngcontent-%COMP%], .p-dark[_nghost-%COMP%]     [toolbar-extra] .toolbar-btn.active, .p-dark   [_nghost-%COMP%]     [toolbar-extra] .toolbar-btn.active{background:rgba(var(--c-blue-400-rgb),.2);color:var(--c-blue-300)}.toolbar-sep[_ngcontent-%COMP%]{width:1px;height:18px;background:rgba(var(--c-blue-600-rgb),.15);margin:0 4px}.p-dark[_nghost-%COMP%]   .toolbar-sep[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .toolbar-sep[_ngcontent-%COMP%]{background:rgba(var(--c-white-rgb),.12)}.fullscreen-btn[_ngcontent-%COMP%]{margin-left:auto}.rich-editor-combined.fullscreen[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1000;border-radius:0;border:none}.rich-editor-combined.fullscreen[_ngcontent-%COMP%]   .rich-editor-area[_ngcontent-%COMP%]{max-height:none!important;background:rgb(var(--c-white-rgb))}.rich-editor-combined.fullscreen[_ngcontent-%COMP%]   .rich-editor-toolbar[_ngcontent-%COMP%]{background:var(--c-blue-100)}.p-dark[_nghost-%COMP%]   .rich-editor-combined.fullscreen[_ngcontent-%COMP%]   .rich-editor-area[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .rich-editor-combined.fullscreen[_ngcontent-%COMP%]   .rich-editor-area[_ngcontent-%COMP%]{background:var(--c-slate-950)}.p-dark[_nghost-%COMP%]   .rich-editor-combined.fullscreen[_ngcontent-%COMP%]   .rich-editor-toolbar[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .rich-editor-combined.fullscreen[_ngcontent-%COMP%]   .rich-editor-toolbar[_ngcontent-%COMP%]{background:var(--c-slate-800)}.rich-editor-area[_ngcontent-%COMP%]{flex:1;background:rgba(var(--c-white-rgb),.85);padding:12px 16px;overflow-y:auto;max-height:var(--editor-max-height, none)}.p-dark[_nghost-%COMP%]   .rich-editor-area[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .rich-editor-area[_ngcontent-%COMP%]{background:rgba(var(--c-slate-950-rgb),.45)}.editor-content[_ngcontent-%COMP%]{outline:none;min-height:1.5em;line-height:1.7;font-size:15px;word-break:break-word;cursor:text}.editor-content[_ngcontent-%COMP%]:empty:before{content:attr(data-placeholder);color:var(--text-hint);pointer-events:none}.editor-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .editor-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .editor-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:.6em 0 .3em;font-weight:700}.editor-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.7em}.editor-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.4em}.editor-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2em}.editor-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.3em 0}.editor-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .editor-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin:.4em 0;padding-left:1.6em}.editor-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-accent);text-decoration:underline;text-underline-offset:2px}.editor-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]{margin:.6em 0;padding:8px 16px;border-left:3px solid var(--c-blue-600);background:rgba(var(--c-blue-600-rgb),.04);color:var(--text-secondary);border-radius:0 var(--radius) var(--radius) 0;font-style:italic}.editor-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:.6em 0;padding:12px 16px;background:rgba(var(--c-slate-950-rgb),.06);border-radius:var(--radius);font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.5;overflow-x:auto;white-space:pre-wrap;word-break:break-all}.editor-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:1px 5px;background:rgba(var(--c-slate-950-rgb),.06);border-radius:var(--radius);font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:.9em}.editor-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:none;height:1px;background:rgba(var(--c-blue-600-rgb),.15);margin:1em 0}.editor-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:var(--radius);margin:8px 0}.editor-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:8px 0;position:relative}.editor-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .editor-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(var(--c-blue-600-rgb),.2);padding:6px 10px;min-width:40px}.editor-content[_ngcontent-%COMP%]   .ql-blank-marker[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;border-radius:var(--radius);background:linear-gradient(135deg,rgba(var(--c-blue-500-rgb),.25),rgba(var(--c-blue-600-rgb),.15));border:1px solid rgba(var(--c-blue-500-rgb),.4);color:var(--c-blue-800);font-size:12px;font-weight:700;padding:0 6px;margin:0 3px;vertical-align:middle;cursor:default;-webkit-user-select:none;user-select:none;line-height:1}.p-dark[_nghost-%COMP%]   .editor-content[_ngcontent-%COMP%]   .ql-blank-marker[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .editor-content[_ngcontent-%COMP%]   .ql-blank-marker[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(var(--c-blue-400-rgb),.25),rgba(var(--c-blue-500-rgb),.15));border-color:rgba(var(--c-blue-400-rgb),.45);color:var(--c-blue-300)}.media-dialog-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.media-dialog-tabs[_ngcontent-%COMP%]{display:flex;gap:7px}.type-chip[_ngcontent-%COMP%]{border:1px solid var(--glass-border);background:var(--glass-bg);color:var(--c-blue-900);border-radius:var(--radius);padding:7px 16px;font-size:14px;cursor:pointer;transition:transform .12s ease,background .12s ease,border-color .12s ease;box-shadow:none;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);white-space:nowrap}.type-chip.active[_ngcontent-%COMP%]{background:linear-gradient(120deg,rgba(var(--c-blue-600-rgb),.4),rgba(var(--c-blue-600-rgb),.22));border-color:rgba(var(--c-blue-600-rgb),.55);transform:translateY(-1px)}.type-chip[_ngcontent-%COMP%]:hover:not(.active){background:rgba(var(--c-blue-600-rgb),.12);border-color:rgba(var(--c-blue-600-rgb),.4);transform:translateY(-1px)}.p-dark[_nghost-%COMP%]   .type-chip[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .type-chip[_ngcontent-%COMP%]{background:rgba(var(--c-slate-950-rgb),.6);border-color:rgba(var(--c-blue-400-rgb),.2);color:var(--c-blue-50)}.p-dark[_nghost-%COMP%]   .type-chip.active[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .type-chip.active[_ngcontent-%COMP%]{background:linear-gradient(120deg,rgba(var(--c-blue-500-rgb),.35),rgba(var(--c-blue-600-rgb),.2));border-color:rgba(var(--c-blue-400-rgb),.5)}.p-dark[_nghost-%COMP%]   .type-chip[_ngcontent-%COMP%]:hover:not(.active), .p-dark   [_nghost-%COMP%]   .type-chip[_ngcontent-%COMP%]:hover:not(.active){background:rgba(var(--c-blue-500-rgb),.15);border-color:rgba(var(--c-blue-400-rgb),.3)}.field-label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:600;color:var(--text-secondary)}.field-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-weight:400}.media-input[_ngcontent-%COMP%]{padding:8px 10px;border:1px solid rgba(var(--c-blue-600-rgb),.2);border-radius:var(--radius);background:rgba(var(--c-white-rgb),.6);font-size:14px;color:var(--text-primary);outline:none;transition:border-color .15s}.media-input[_ngcontent-%COMP%]:focus{border-color:var(--c-blue-600)}.p-dark[_nghost-%COMP%]   .media-input[_ngcontent-%COMP%], .p-dark   [_nghost-%COMP%]   .media-input[_ngcontent-%COMP%]{background:rgba(var(--c-slate-950-rgb),.4);border-color:rgba(var(--c-white-rgb),.12)}.p-dark[_nghost-%COMP%]   .media-input[_ngcontent-%COMP%]:focus, .p-dark   [_nghost-%COMP%]   .media-input[_ngcontent-%COMP%]:focus{border-color:var(--c-blue-400)}.media-file-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-top:6px}.media-file-ok[_ngcontent-%COMP%]{color:var(--c-green-600);font-size:12px;font-weight:600}']})};var je=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Mt=["*"],kt={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},Et={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},Ue=(()=>{class t extends L{name="divider";style=je;classes=Et;inlineStyles=kt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();var qe=new T("DIVIDER_INSTANCE"),Pt=(()=>{class t extends K{$pcDivider=h(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=h(Ue);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=S({type:t,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(i,n){i&2&&(F("aria-orientation",n.layout)("data-p",n.dataP),W(n.sx("root")),y(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[P([Ue,{provide:qe,useExisting:t},{provide:j,useExisting:t}]),V([f]),I],ngContentSelectors:Mt,decls:2,vars:3,consts:[[3,"pBind"]],template:function(i,n){i&1&&(D(),r(0,"div",0),A(1),a()),i&2&&(y(n.cx("content")),g("pBind",n.ptm("content")))},dependencies:[N,H,Z,f],encapsulation:2,changeDetection:0})}return t})(),Gn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=O({imports:[Pt,Z,Z]})}return t})();export{et as a,Ut as b,dn as c,cn as d,Pt as e,Gn as f,Le as g};
