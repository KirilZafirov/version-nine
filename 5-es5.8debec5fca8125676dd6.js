!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Cwg5:function(n,r,i){"use strict";i.r(r),i.d(r,"CalculationsModule",(function(){return M}));var o=i("PCNd"),b=i("tyNb"),c=i("3Pt+"),a=i("pLZG"),l=i("lJxs"),u=i("fXoL"),d=i("ofXK");function s(e,t){if(1&e&&(u.Mb(0,"option",25),u.ec(1),u.Lb()),2&e){var n=t.$implicit;u.Yb("value",n.value)("title",n.display),u.xb(1),u.gc(" ",n.display," ")}}function f(e,t){if(1&e&&(u.Mb(0,"option",25),u.ec(1),u.Lb()),2&e){var n=t.$implicit;u.Yb("value",n.value)("title",n.display),u.xb(1),u.gc(" ",n.display," ")}}function m(e,t){if(1&e){var n=u.Nb();u.Kb(0),u.Mb(1,"tr",12),u.Mb(2,"th",13),u.ec(3),u.Lb(),u.Mb(4,"td",14),u.Ib(5,"input",15),u.Lb(),u.Mb(6,"td",14),u.Mb(7,"select",16),u.dc(8,s,2,3,"option",17),u.Lb(),u.Lb(),u.Mb(9,"td",14),u.Ib(10,"input",18),u.Lb(),u.Mb(11,"td",14),u.Ib(12,"input",19),u.Lb(),u.Mb(13,"td",14),u.Mb(14,"select",20),u.dc(15,f,2,3,"option",17),u.Lb(),u.Lb(),u.Mb(16,"td",14),u.Ib(17,"input",21),u.Lb(),u.Mb(18,"td",14),u.Ib(19,"input",22),u.Lb(),u.Mb(20,"td",23),u.Mb(21,"button",24),u.Tb("click",(function(){u.ac(n);var e=t.index;return u.Vb().remove(e)})),u.ec(22,"\u0418\u0437\u0431\u0440\u0438\u0448\u0438 "),u.Lb(),u.Lb(),u.Lb(),u.Jb()}if(2&e){var r=t.$implicit,i=t.index,o=u.Vb();u.xb(1),u.Yb("formGroup",r),u.xb(2),u.fc(i+1),u.xb(5),u.Yb("ngForOf",o.measureAndAmount),u.xb(7),u.Yb("ngForOf",o.ddvRate),u.xb(2),u.Yb("value",r.get("priceBeforeTax").value*r.get("totalRequired").value),u.xb(2),u.Yb("value",r.get("priceBeforeTax").value*r.get("totalRequired").value*r.get("ddvRate").value)}}function p(e,t){if(1&e&&(u.Kb(0),u.Mb(1,"tr",26),u.Ib(2,"td",14),u.Ib(3,"td",14),u.Ib(4,"td",14),u.Ib(5,"td",14),u.Mb(6,"td",14),u.ec(7," \u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432 "),u.Lb(),u.Mb(8,"td",14),u.ec(9),u.Lb(),u.Mb(10,"td",23),u.ec(11," \u0412\u043a\u0443\u043f\u043do \u0434\u0434\u0432 "),u.Lb(),u.Mb(12,"td",23),u.ec(13),u.Lb(),u.Lb(),u.Jb()),2&e){var n=t.ngIf;u.xb(9),u.gc(" ",n.priceBeforeDDV," "),u.xb(4),u.gc(" ",n.priceAfterDDV," ")}}var v,h,y,g=[{path:"",component:(v=function(){function n(t){e(this,n),this.formBuilder=t,this.measureAndAmount=[{display:"\u041a\u0438\u043b\u043e\u0433\u0440\u0430\u043c",value:"kg"},{display:"\u041b\u0438\u0442\u0430\u0440",value:"lt"},{display:"\u0411\u0440\u043e\u0458",value:"br"}],this.ddvRate=[{display:"5%",value:.05},{display:"18%",value:.18}],this.dynamicForm=this.formBuilder.group({items:new c.b([this.getNewItemControl()])})}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){var e=this;this.result$=this.dynamicForm.valueChanges.pipe(Object(a.a)((function(){return e.dynamicForm.valid})),Object(l.a)((function(t){return e.calculateResult(t.items)})))}},{key:"calculateResult",value:function(e){var t=this,n={priceBeforeDDV:0,priceAfterDDV:0};return e.map((function(e){var r=t.calculateSingle(e);n.priceAfterDDV+=r.priceAfterDDV,n.priceBeforeDDV+=r.priceBeforeDDV})),n}},{key:"calculateSingle",value:function(e){var t=e.priceBeforeTax*e.totalRequired;return{priceBeforeDDV:t,priceAfterDDV:t*e.ddvRate}}},{key:"getNewItemControl",value:function(){return this.formBuilder.group({subject:[""],priceBeforeTax:[null,c.n.required],measureAndAmount:["kg",c.n.required],ddvRate:[.18,c.n.required],totalRequired:[null,c.n.required]})}},{key:"remove",value:function(e){this.items.removeAt(e)}},{key:"addNewItem",value:function(){this.items.push(this.getNewItemControl())}},{key:"onSubmit",value:function(){this.dynamicForm.invalid||alert("SUCCESS!! :-)\n\n"+JSON.stringify(this.dynamicForm.value,null,4))}},{key:"onReset",value:function(){this.dynamicForm.reset(),this.items.clear()}},{key:"formItems",get:function(){return this.dynamicForm.controls}},{key:"items",get:function(){return this.formItems.items}}])&&t(r.prototype,i),o&&t(r,o),n}(),v.\u0275fac=function(e){return new(e||v)(u.Hb(c.c))},v.\u0275cmp=u.Bb({type:v,selectors:[["app-calculations"]],decls:50,vars:6,consts:[[3,"formGroup","ngSubmit"],[1,"card","m-3"],[1,"card-header"],[1,"table","table-hover"],[1,"bg-info"],["scope","col"],["scope","col",1,"btn-action"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card-footer","text-center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["type","reset",1,"btn","btn-warning",3,"click"],[1,"bg-primary",3,"formGroup"],["scope","row"],[1,"align-middle"],["type","text","formControlName","subject","title","\u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0430 \u043d\u0430\u0431\u0430\u0432\u043a\u0430\u0442\u0430 \u043e\u0434\u043d\u043e\u0441\u043d\u043e \u043e\u043f\u0438\u0441 \u043d\u0430 \u0441\u0442\u043e\u043a\u0430\u0442\u0430 \u043a\u043e\u0458\u0430 \u0441\u0435 \u043f\u043e\u0431\u0430\u0440\u0443\u0432\u0430 \u0438 \u043c\u043e\u0436\u0435\u0431\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438 \u0438\u043b\u0438 \u0433\u0440\u0430\u043c\u0430\u0436\u0430","placeholder","\u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0430 \u043d\u0430\u0431\u0430\u0432\u043a\u0430",1,"form-control"],["id","measureAndAmount","title","\u0415\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u043c\u0435\u0440\u043a\u0430 \u0438 \u043a\u043e\u0447\u0438\u043d\u0430 \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043e\u0442 , \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u0438\u0434\u0435 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c \u201e\u043a\u0433\u201c , \u043b\u0438\u0442\u0430\u0440 \u201e\u043b\u0442\u201c \u0438 \u0431\u0440\u043e\u0458 \u201e\u0431\u0440\u201c ","formControlName","measureAndAmount","required","",1,"form-control"],["class","align-center",3,"value","title",4,"ngFor","ngForOf"],["type","number","title","\u0426\u0435\u043d\u0430 \u043f\u043e \u0435\u0434\u0438\u043d\u0438\u0446\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434 - \u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043b\u043a\u0443 \u0435 \u0446\u0435\u043d\u0430\u0442\u0430 \u043d\u0430 \u041b\u0438\u0442\u0430\u0440 \u041c\u043b\u0435\u043a\u043e , \u0438\u043b\u0438 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c \u0458\u0430\u0431\u043e\u043b\u043a\u0430","formControlName","priceBeforeTax","placeholder","\u0435\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u0446\u0435\u043d\u0430 \u0446\u0435\u0437 \u0434\u0434\u0432","onkeydown","return event.keyCode !== 69","required","",1,"form-control"],["type","number","formControlName","totalRequired","placeholder","\u0432\u043a\u0443\u043f\u043d\u0430 \u043f\u043e\u0431\u0430\u0440\u0430\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0434 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434","title","\u0432\u043a\u0443\u043f\u043d\u0430 \u043f\u043e\u0431\u0430\u0440\u0430\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0434 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434.\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u043b\u0438\u0442\u0430\u0440 \u041c\u043b\u0435\u043a\u043e \u0441\u0435 \u043f\u0438\u0448\u0443\u0432\u0430 60 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0441\u043a\u0438 \u0441\u0435 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u0443\u0432\u0430 \u0432\u043e \u043b\u0438\u0442\u0440\u0438","onkeydown","return event.keyCode !== 69","required","",1,"form-control"],["id","ddvRate","title","\u0421\u0442\u0430\u043f\u043a\u0430\u0442\u0430 \u043d\u0430 \u0434\u0434\u0432 \u043f\u043e \u043a\u043e\u0458\u0430 \u0442\u0440\u0435\u0431\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u0430 \u043e\u0432\u043e\u0458 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434","formControlName","ddvRate","required","",1,"form-control"],["type","number","placeholder","\u0432\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432","disabled","","title","\u0412\u043a\u0443\u043f\u043d\u0430\u0442\u0430 \u0446\u0435\u043d\u0430 \u043d\u0430 \u0441\u0442\u0430\u0432\u043a\u0430\u0442\u0430 \u0431\u0435\u0437 \u0432\u043a\u043b\u0443\u0447\u0435\u043d\u043e \u0434\u0434\u0432",1,"form-control",3,"value"],["type","number","placeholder","\u0432\u043a\u0443\u043f\u043do \u0434\u0434\u0432","disabled","","title","\u0412\u043a\u0443\u043f\u043d\u043e \u0434\u0434\u0432",1,"form-control",3,"value"],[1,"align-middle","btn-action"],["type","button",1,"btn","btn-danger",3,"click"],[1,"align-center",3,"value","title"],[1,"list-group","list-group-flush"]],template:function(e,t){1&e&&(u.Mb(0,"form",0),u.Tb("ngSubmit",(function(){return t.onSubmit()})),u.Mb(1,"div",1),u.Mb(2,"h5",2),u.ec(3,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u043a\u0430"),u.Lb(),u.Mb(4,"table",3),u.Mb(5,"thead"),u.Mb(6,"tr",4),u.Ib(7,"th",5),u.Mb(8,"th",5),u.ec(9,"1"),u.Lb(),u.Mb(10,"th",5),u.ec(11,"2"),u.Lb(),u.Mb(12,"th",5),u.ec(13,"3"),u.Lb(),u.Mb(14,"th",5),u.ec(15,"4"),u.Lb(),u.Mb(16,"th",5),u.ec(17,"5"),u.Lb(),u.Mb(18,"th",5),u.ec(19,"6"),u.Lb(),u.Mb(20,"th",5),u.ec(21,"7"),u.Lb(),u.Ib(22,"th",6),u.Lb(),u.Mb(23,"tr",4),u.Mb(24,"th",5),u.ec(25,"#"),u.Lb(),u.Mb(26,"th",5),u.ec(27,"\u0412\u0438\u0434 \u0438 \u043e\u043f\u0438\u0441 \u043d\u0430 \u0441\u0442\u043e\u043a\u0430"),u.Lb(),u.Mb(28,"th",5),u.ec(29,"\u0415\u0434\u0438\u043d.\u041c\u0435\u0440\u043a\u0430 \u0438 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 "),u.Lb(),u.Mb(30,"th",5),u.ec(31,"\u0415\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u0426\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432."),u.Lb(),u.Mb(32,"th",5),u.ec(33,"\u0432\u043a\u0443\u043f\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043f\u043e \u0415\u0434\u0438\u043d.\u041c\u0435\u0440\u043a\u0430"),u.Lb(),u.Mb(34,"th",5),u.ec(35,"\u0441\u0442\u0430\u043f\u043a\u0430 \u043d\u0430 \u0434\u0434\u0432 (5%/18%)"),u.Lb(),u.Mb(36,"th",5),u.ec(37,"\u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432"),u.Lb(),u.Mb(38,"th",5),u.ec(39,"\u0412\u043a\u0443\u043f\u043d\u043e \u0434\u0434\u0432"),u.Lb(),u.Ib(40,"th",6),u.Lb(),u.Lb(),u.Mb(41,"tbody"),u.dc(42,m,23,6,"ng-container",7),u.dc(43,p,14,2,"ng-container",8),u.Wb(44,"async"),u.Lb(),u.Lb(),u.Mb(45,"div",9),u.Mb(46,"button",10),u.Tb("click",(function(){return t.addNewItem()})),u.ec(47,"\u0414\u043e\u0434\u0430\u0434\u0438 \u041d\u043e\u0432"),u.Lb(),u.Mb(48,"button",11),u.Tb("click",(function(){return t.onReset()})),u.ec(49,"\u0418\u0441\u0447\u0438\u0441\u0442\u0438 \u0441\u0435"),u.Lb(),u.Lb(),u.Lb(),u.Lb()),2&e&&(u.Yb("formGroup",t.dynamicForm),u.xb(42),u.Yb("ngForOf",t.items.controls),u.xb(1),u.Yb("ngIf",u.Xb(44,4,t.result$)),u.xb(3),u.Yb("disabled",!t.dynamicForm.valid))},directives:[c.p,c.h,c.e,d.i,d.j,c.a,c.g,c.d,c.m,c.l,c.j,c.i,c.o],pipes:[d.b],styles:["tr[_ngcontent-%COMP%]{display:table-row}"]}),v)}],L=((y=function t(){e(this,t)}).\u0275mod=u.Fb({type:y}),y.\u0275inj=u.Eb({factory:function(e){return new(e||y)},imports:[[b.a.forChild(g)],b.a]}),y),M=((h=function t(){e(this,t)}).\u0275mod=u.Fb({type:h}),h.\u0275inj=u.Eb({factory:function(e){return new(e||h)},imports:[[o.a,L]]}),h)}}])}();