(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Cwg5:function(e,t,n){"use strict";n.r(t),n.d(t,"CalculationsModule",(function(){return g}));var r=n("PCNd"),o=n("tyNb"),i=n("3Pt+"),b=n("lJxs"),c=n("fXoL"),l=n("ofXK");function a(e,t){if(1&e&&(c.Mb(0,"option",23),c.ec(1),c.Lb()),2&e){const e=t.$implicit;c.Yb("value",e.value)("title",e.display),c.xb(1),c.gc(" ",e.display," ")}}function d(e,t){if(1&e&&(c.Mb(0,"option",23),c.ec(1),c.Lb()),2&e){const e=t.$implicit;c.Yb("value",e.value)("title",e.display),c.xb(1),c.gc(" ",e.display," ")}}function u(e,t){if(1&e){const e=c.Nb();c.Kb(0),c.Mb(1,"tr",12),c.Mb(2,"th",13),c.ec(3),c.Lb(),c.Mb(4,"td",14),c.Ib(5,"input",15),c.Lb(),c.Mb(6,"td",14),c.Mb(7,"select",16),c.dc(8,a,2,3,"option",17),c.Lb(),c.Lb(),c.Mb(9,"td",14),c.Ib(10,"input",18),c.Lb(),c.Mb(11,"td",14),c.Ib(12,"input",19),c.Lb(),c.Mb(13,"td",14),c.Mb(14,"select",20),c.dc(15,d,2,3,"option",17),c.Lb(),c.Lb(),c.Mb(16,"td",14),c.ec(17," \u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432 "),c.Lb(),c.Mb(18,"td",14),c.ec(19," \u0412\u043a\u0443\u043f\u043d\u0430 \u0434\u0434\u0432 "),c.Lb(),c.Mb(20,"td",21),c.Mb(21,"button",22),c.Tb("click",(function(){c.ac(e);const n=t.index;return c.Vb().remove(n)})),c.ec(22,"\u0418\u0437\u0431\u0440\u0438\u0448\u0438 "),c.Lb(),c.Lb(),c.Lb(),c.Jb()}if(2&e){const e=t.$implicit,n=t.index,r=c.Vb();c.xb(1),c.Yb("formGroup",e),c.xb(2),c.fc(n+1),c.xb(5),c.Yb("ngForOf",r.measureAndAmount),c.xb(7),c.Yb("ngForOf",r.ddvRate)}}function s(e,t){if(1&e&&(c.Kb(0),c.Mb(1,"tr",24),c.Ib(2,"td",14),c.Ib(3,"td",14),c.Ib(4,"td",14),c.Ib(5,"td",14),c.Mb(6,"td",14),c.ec(7," \u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432 "),c.Lb(),c.Mb(8,"td",14),c.ec(9),c.Lb(),c.Mb(10,"td",21),c.ec(11," \u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0441\u043e \u0434\u0434\u0432 "),c.Lb(),c.Mb(12,"td",21),c.ec(13),c.Lb(),c.Lb(),c.Jb()),2&e){const e=t.ngIf;c.xb(9),c.gc(" ",e.priceBeforeDDV," "),c.xb(4),c.gc(" ",e.priceAfterDDV," ")}}function m(e,t){if(1&e&&(c.Kb(0),c.dc(1,s,14,2,"ng-container",8),c.Wb(2,"async"),c.Jb()),2&e){const e=c.Vb();c.xb(1),c.Yb("ngIf",c.Xb(2,1,e.result$))}}const p=[{path:"",component:(()=>{class e{constructor(e){this.formBuilder=e,this.measureAndAmount=[{display:"\u041a\u0438\u043b\u043e\u0433\u0440\u0430\u043c",value:"kg"},{display:"\u041b\u0438\u0442\u0430\u0440",value:"lt"},{display:"\u0411\u0440\u043e\u0458",value:"br"}],this.ddvRate=[{display:"5%",value:.05},{display:"18%",value:.18}],this.dynamicForm=this.formBuilder.group({items:new i.b([this.getNewItemControl()])})}ngOnInit(){this.result$=this.dynamicForm.valueChanges.pipe(Object(b.a)(e=>this.calculateResult(e)))}calculateResult(e){return e.reduce((e,t,n)=>0,0),{priceBeforeDDV:0,priceAfterDDV:0}}calculateSingle(e){const t=e.priceBeforeTax*e.totalRequired;return{priceBeforeDDV:t,priceAfterDDV:e.priceBeforeTax+t*e.ddvRate}}getNewItemControl(){return this.formBuilder.group({subject:[""],priceBeforeTax:[null,i.n.required],measureAndAmount:["kg",i.n.required],ddvRate:[.18,i.n.required],totalRequired:[null,i.n.required]})}remove(e){this.items.removeAt(e)}addNewItem(){this.items.push(this.getNewItemControl())}get formItems(){return this.dynamicForm.controls}get items(){return this.formItems.items}onSubmit(){this.dynamicForm.invalid||alert("SUCCESS!! :-)\n\n"+JSON.stringify(this.dynamicForm.value,null,4))}onReset(){this.dynamicForm.reset(),this.items.clear()}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(i.c))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-calculations"]],decls:32,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"card","m-3"],[1,"card-header"],[1,"table","table-hover"],[1,"bg-info"],["scope","col"],["scope","col",1,"btn-action"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card-footer","text-center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["type","reset",1,"btn","btn-warning",3,"click"],[1,"bg-primary",3,"formGroup"],["scope","row"],[1,"align-middle"],["type","text","formControlName","subject","title","\u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0430 \u043d\u0430\u0431\u0430\u0432\u043a\u0430\u0442\u0430 \u043e\u0434\u043d\u043e\u0441\u043d\u043e \u043e\u043f\u0438\u0441 \u043d\u0430 \u0441\u0442\u043e\u043a\u0430\u0442\u0430 \u043a\u043e\u0458\u0430 \u0441\u0435 \u043f\u043e\u0431\u0430\u0440\u0443\u0432\u0430 \u0438 \u043c\u043e\u0436\u0435\u0431\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438 \u0438\u043b\u0438 \u0433\u0440\u0430\u043c\u0430\u0436\u0430","placeholder","\u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0430 \u043d\u0430\u0431\u0430\u0432\u043a\u0430",1,"form-control"],["id","measureAndAmount","title","\u0415\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u043c\u0435\u0440\u043a\u0430 \u0438 \u043a\u043e\u0447\u0438\u043d\u0430 \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043e\u0442 , \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u0438\u0434\u0435 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c \u201e\u043a\u0433\u201c , \u043b\u0438\u0442\u0430\u0440 \u201e\u043b\u0442\u201c \u0438 \u0431\u0440\u043e\u0458 \u201e\u0431\u0440\u201c ","formControlName","measureAndAmount","required","",1,"form-control"],["class","align-center",3,"value","title",4,"ngFor","ngForOf"],["type","number","title","\u0426\u0435\u043d\u0430 \u043f\u043e \u0435\u0434\u0438\u043d\u0438\u0446\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434 - \u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043b\u043a\u0443 \u0435 \u0446\u0435\u043d\u0430\u0442\u0430 \u043d\u0430 \u041b\u0438\u0442\u0430\u0440 \u041c\u043b\u0435\u043a\u043e , \u0438\u043b\u0438 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c \u0458\u0430\u0431\u043e\u043b\u043a\u0430","formControlName","priceBeforeTax","placeholder","\u0435\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u0446\u0435\u043d\u0430 \u0446\u0435\u0437 \u0434\u0434\u0432","onkeydown","return event.keyCode !== 69","required","",1,"form-control"],["type","number","formControlName","totalRequired","placeholder","\u0432\u043a\u0443\u043f\u043d\u0430 \u043f\u043e\u0431\u0430\u0440\u0430\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0434 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434","title","\u0432\u043a\u0443\u043f\u043d\u0430 \u043f\u043e\u0431\u0430\u0440\u0430\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0434 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434.\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u043b\u0438\u0442\u0430\u0440 \u041c\u043b\u0435\u043a\u043e \u0441\u0435 \u043f\u0438\u0448\u0443\u0432\u0430 60 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0441\u043a\u0438 \u0441\u0435 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u0443\u0432\u0430 \u0432\u043e \u043b\u0438\u0442\u0440\u0438","onkeydown","return event.keyCode !== 69","required","",1,"form-control"],["id","ddvRate","title","\u0421\u0442\u0430\u043f\u043a\u0430\u0442\u0430 \u043d\u0430 \u0434\u0434\u0432 \u043f\u043e \u043a\u043e\u0458\u0430 \u0442\u0440\u0435\u0431\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u0430 \u043e\u0432\u043e\u0458 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434","formControlName","ddvRate","required","",1,"form-control"],[1,"align-middle","btn-action"],["type","button",1,"btn","btn-danger",3,"click"],[1,"align-center",3,"value","title"],[1,"list-group","list-group-flush"]],template:function(e,t){1&e&&(c.Mb(0,"form",0),c.Tb("ngSubmit",(function(){return t.onSubmit()})),c.Mb(1,"div",1),c.Mb(2,"h5",2),c.ec(3,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u043a\u0430"),c.Lb(),c.Mb(4,"table",3),c.Mb(5,"thead"),c.Mb(6,"tr",4),c.Mb(7,"th",5),c.ec(8,"#"),c.Lb(),c.Mb(9,"th",5),c.ec(10,"\u0412\u0438\u0434 \u0438 \u043e\u043f\u0438\u0441 \u043d\u0430 \u0441\u0442\u043e\u043a\u0430"),c.Lb(),c.Mb(11,"th",5),c.ec(12,"\u0415\u0434\u0438\u043d.\u041c\u0435\u0440\u043a\u0430 \u0438 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 "),c.Lb(),c.Mb(13,"th",5),c.ec(14,"\u0415\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u0426\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432."),c.Lb(),c.Mb(15,"th",5),c.ec(16,"\u0432\u043a\u0443\u043f\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043f\u043e \u0415\u0434\u0438\u043d.\u041c\u0435\u0440\u043a\u0430"),c.Lb(),c.Mb(17,"th",5),c.ec(18,"\u0441\u0442\u0430\u043f\u043a\u0430 \u043d\u0430 \u0434\u0434\u0432 (5%/18%)"),c.Lb(),c.Mb(19,"th",5),c.ec(20,"\u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432"),c.Lb(),c.Mb(21,"th",5),c.ec(22,"\u0412\u043a\u0443\u043f\u043d\u043e \u0434\u0434\u0432"),c.Lb(),c.Ib(23,"th",6),c.Lb(),c.Lb(),c.Mb(24,"tbody"),c.dc(25,u,23,4,"ng-container",7),c.dc(26,m,3,3,"ng-container",8),c.Lb(),c.Lb(),c.Mb(27,"div",9),c.Mb(28,"button",10),c.Tb("click",(function(){return t.addNewItem()})),c.ec(29,"\u0414\u043e\u0434\u0430\u0434\u0438 \u041d\u043e\u0432"),c.Lb(),c.Mb(30,"button",11),c.Tb("click",(function(){return t.onReset()})),c.ec(31,"\u0418\u0441\u0447\u0438\u0441\u0442\u0438 \u0441\u0435"),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.Yb("formGroup",t.dynamicForm),c.xb(25),c.Yb("ngForOf",t.items.controls),c.xb(1),c.Yb("ngIf",t.dynamicForm.valid),c.xb(2),c.Yb("disabled",!t.dynamicForm.valid))},directives:[i.p,i.h,i.e,l.i,l.j,i.a,i.g,i.d,i.m,i.l,i.j,i.i,i.o],pipes:[l.b],styles:["tr[_ngcontent-%COMP%]{display:table-row}"]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[o.a.forChild(p)],o.a]}),e})(),g=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[r.a,f]]}),e})()}}]);