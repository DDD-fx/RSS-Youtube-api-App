"use strict";(self.webpackChunkyoutube_app=self.webpackChunkyoutube_app||[]).push([[474],{7474:(v,l,o)=>{o.r(l),o.d(l,{CustomDetailedInfoModule:()=>_});var d=o(6895),p=o(8704),u=o(4004),x=o(8505),C=o(2529),m=o(4995),t=o(4650),f=o(9653),i=o(3546),g=o(4859);function h(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card",1)(1,"button",2),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.goBack())}),t.O4$(),t.TgZ(2,"svg",3),t._UZ(3,"path",4),t.qZA()(),t.kcU(),t._UZ(4,"img",5),t.TgZ(5,"div",6)(6,"div",7)(7,"mat-card-title",8),t._uU(8),t.qZA(),t.TgZ(9,"div",9),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"div",10)(13,"p",11),t._uU(14,"Description:"),t.qZA(),t.TgZ(15,"p",12),t._uU(16),t.qZA()(),t.TgZ(17,"mat-card-actions")(18,"button",13),t.O4$(),t.TgZ(19,"svg",14),t._UZ(20,"path",15),t.qZA(),t._uU(21),t.qZA(),t.kcU(),t.TgZ(22,"button",13),t.O4$(),t.TgZ(23,"svg",16),t._UZ(24,"path",17),t.qZA(),t._uU(25),t.qZA(),t.kcU(),t.TgZ(26,"button",13),t.O4$(),t.TgZ(27,"svg",18),t._UZ(28,"path",19)(29,"path",20),t.qZA(),t._uU(30),t.qZA()(),t.kcU(),t._UZ(31,"mat-card-footer"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Gre("description-card__back-btn description-card__back-btn--",n.currCardData.color," btn"),t.xp6(3),t.Q6J("src",n.currCardData.img,t.LSH),t.xp6(4),t.Oqu(n.currCardData.title),t.xp6(2),t.Oqu(t.xi3(11,13,n.currCardData.date,"fullDate")),t.xp6(6),t.Oqu(n.currCardData.description),t.xp6(5),t.hij(" ",0," "),t.xp6(4),t.hij(" ",0," "),t.xp6(5),t.hij(" ",0," "),t.xp6(1),t.Gre("mat-card-footer--",n.currCardData.color,"")}}const w=[{path:"",component:(()=>{class e{constructor(n,r,c,s){this.route=n,this.location=r,this.store=c,this.router=s,this.currCardData$=this.store.select(m.T8)}ngOnInit(){let n="";this.route.params.subscribe(r=>n=r.id),this.currCardData$.pipe((0,u.U)(r=>{const c=r.filter(s=>s.videoLink===n);return 0===c.length&&this.router.navigate(["**"],{skipLocationChange:!0}),c}),(0,x.b)(r=>this.currCardData=r[0]),(0,C.o)(r=>r.length>0)).subscribe()}goBack(){this.location.back()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.gz),t.Y36(d.Ye),t.Y36(f.yh),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-custom-detailed-info"]],decls:1,vars:1,consts:[["class","description-card card",4,"ngIf"],[1,"description-card","card"],[3,"click"],["width","17","height","20","viewBox","0 0 17 20","fill","none","xmlns","http://www.w3.org/2000/svg",1,"back-btn-svg"],["d","M16 2L3 10.2162L16 18","stroke","#F2F2F2","stroke-width","3"],["mat-card-image","","alt","video image",1,"description-card__image",3,"src"],[1,"description-card-wrapper"],[1,"title-wrapper"],[1,"description-card__title"],[1,"description-card__date"],[1,"description-wrapper"],[1,"description-card__description-title"],[1,"description-card__description"],["mat-button",""],["width","23","height","14","viewBox","0 0 23 14","fill","none","xmlns","http://www.w3.org/2000/svg",1,"black-icon"],["d","M11.1675 0C6.09228 0 1.77484 2.89272 0 7C1.77484 11.1073 6.09228 14 11.1675 14C16.2428 14 20.5602 11.1073 22.335 7C20.5602 2.89272 16.2428 0 11.1675 0ZM11.1675 11.6682C8.37564 11.6682 6.09228 9.56821 6.09228 7C6.09228 4.43179 8.37564 2.33179 11.1675 2.33179C13.9594 2.33179 16.2428 4.43179 16.2428 7C16.2428 9.56821 13.9594 11.6682 11.1675 11.6682ZM11.1675 4.2C9.4924 4.2 8.12138 5.46093 8.12138 7C8.12138 8.53907 9.4924 9.8 11.1675 9.8C12.8427 9.8 14.2137 8.53907 14.2137 7C14.2137 5.46093 12.8427 4.2 11.1675 4.2Z"],["width","17","height","14","viewBox","0 0 17 14","fill","none","xmlns","http://www.w3.org/2000/svg",1,"black-icon"],["d","M12.2413 0H12.2011C10.6024 0 9.18905 0.735 8.37564 1.82C7.56224 0.735 6.14885 0 4.55023 0H4.50996C2.0174 0.021 0 1.7815 0 3.955C0 5.25 0.652334 7.0875 1.92479 8.5995C4.34889 11.48 8.37564 14 8.37564 14C8.37564 14 12.4024 11.48 14.8265 8.5995C16.099 7.0875 16.7513 5.25 16.7513 3.955C16.7513 1.7815 14.7339 0.021 12.2413 0Z"],["width","13","height","13","viewBox","0 0 13 13","fill","none","xmlns","http://www.w3.org/2000/svg",1,"black-icon"],["d","M0 4.1687V11.75C0 12.4406 0.559375 13 1.25 13H8.83125C9.52188 13 10.0813 12.4406 10.0813 11.75V4.1687C10.0813 3.47808 9.52188 2.9187 8.83125 2.9187H1.25C0.559375 2.9187 0 3.47808 0 4.1687Z","fill","black"],["d","M2.91797 1.25V2.1375C2.91797 2.20625 2.97422 2.2625 3.04297 2.2625H9.23672C10.0617 2.2625 10.7367 2.9375 10.7367 3.7625V9.95625C10.7367 10.025 10.793 10.0813 10.8617 10.0813H11.7492C12.4398 10.0813 12.9992 9.52188 12.9992 8.83125V1.25C12.9992 0.559375 12.4398 0 11.7492 0H4.16797C3.47734 0 2.91797 0.559375 2.91797 1.25Z"]],template:function(n,r){1&n&&t.YNc(0,h,32,16,"mat-card",0),2&n&&t.Q6J("ngIf",r.currCardData)},dependencies:[d.O5,i.a8,i.n5,i.hq,i.rt,i.G2,g.lW,d.uU],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;padding:20px 20px 20px 42px}.description-card[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;align-items:stretch;flex-wrap:nowrap;max-width:1165px;padding:0;filter:drop-shadow(5px 10px 10px rgba(47,128,237,.25))}@media (max-width: 850px){.description-card[_ngcontent-%COMP%]{flex-wrap:wrap;align-items:center}}.description-card__back-btn[_ngcontent-%COMP%]{position:absolute;left:-32px;top:0;border-radius:5px 0 0 5px;width:32px;height:32px;background-color:#2f80ed;border:none}.description-card__back-btn--green[_ngcontent-%COMP%]{background-color:#27ae60}.description-card__back-btn--yellow[_ngcontent-%COMP%]{background-color:#f2c94c}.description-card__back-btn--red[_ngcontent-%COMP%]{background-color:#eb5757}.description-card__back-btn[_ngcontent-%COMP%]:hover{filter:drop-shadow(-2px 2px 4px rgba(47,128,237,.25));cursor:pointer}.description-card__link[_ngcontent-%COMP%]{position:relative;margin-top:16px;align-self:center}.description-card__play-btn[_ngcontent-%COMP%]{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;z-index:2}.description-card__image[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;max-width:729px;margin:0;filter:drop-shadow(5px 10px 20px rgba(51,51,51,.25));border-radius:0 0 0 5px}@media (max-width: 850px){.description-card__image[_ngcontent-%COMP%]{max-width:none}}.description-card__title[_ngcontent-%COMP%]{font:700 24px/28px Roboto,Helvetica Neue,sans-serif;color:#000;margin-right:20px}.description-card__date[_ngcontent-%COMP%]{font:400 10px/12px Roboto,Helvetica Neue,sans-serif;color:#828282}.description-card__description-title[_ngcontent-%COMP%]{font:400 14px/16px Roboto,Helvetica Neue,sans-serif;color:#000}.description-card__description[_ngcontent-%COMP%]{font:400 12px/14px Roboto,Helvetica Neue,sans-serif;max-height:400px;overflow:auto;color:#828282;white-space:pre-wrap;overflow-wrap:anywhere}.description-card-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column;max-width:435px;min-width:250px;box-shadow:5px 5px 20px #33333340;background-color:#e5e5e5}@media (max-width: 850px){.description-card-wrapper[_ngcontent-%COMP%]{max-width:none}}.title-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;justify-content:space-between;flex-wrap:nowrap;padding-top:35px}.title-wrapper[_ngcontent-%COMP%]{padding-left:20px;padding-right:10px}.description-wrapper[_ngcontent-%COMP%]{padding:10px 20px}.mat-card-actions[_ngcontent-%COMP%]{margin:0;padding:0 0 20px;align-self:center}.mat-card-footer[_ngcontent-%COMP%]{margin:0;padding:0;height:5px;border-radius:0 0 5px 5px;background-color:#2f80ed}.mat-card-footer--green[_ngcontent-%COMP%]{background-color:#27ae60}.mat-card-footer--yellow[_ngcontent-%COMP%]{background-color:#f2c94c}.mat-card-footer--red[_ngcontent-%COMP%]{background-color:#eb5757}.back-btn-svg[_ngcontent-%COMP%]{vertical-align:middle}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(w),p.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,b,i.QW,g.ot]}),e})()}}]);