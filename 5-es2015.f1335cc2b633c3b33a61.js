(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Cwg5:function(t,e,r){"use strict";r.r(e),r.d(e,"CalculationsModule",(function(){return v}));var i=r("PCNd"),c=r("tyNb"),o=r("3Pt+"),n=r("pLZG"),b=r("lJxs"),l=r("zx2A");class u{constructor(t){this.notifier=t}call(t,e){const r=new a(t),i=Object(l.c)(this.notifier,new l.a(r));return i&&!r.seenValue?(r.add(i),e.subscribe(r)):r}}class a extends l.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var s=r("XNiG"),d=r("fXoL"),m=r("ofXK");function p(t,e){if(1&t&&(d.Mb(0,"option",34),d.cc(1),d.Lb()),2&t){const t=e.$implicit;d.Wb("value",t.value)("title",t.display),d.xb(1),d.ec(" ",t.display," ")}}function f(t,e){if(1&t&&(d.Mb(0,"option",34),d.cc(1),d.Lb()),2&t){const t=e.$implicit;d.Wb("value",t.value)("title",t.display),d.xb(1),d.ec(" ",t.display," ")}}function h(t,e){if(1&t){const t=d.Nb();d.Kb(0),d.Mb(1,"tr",23),d.Mb(2,"th",24),d.cc(3),d.Lb(),d.Mb(4,"td",9),d.Ib(5,"input",25),d.Lb(),d.Mb(6,"td",9),d.Ib(7,"input",26),d.Lb(),d.Mb(8,"td",9),d.Mb(9,"select",27),d.bc(10,p,2,3,"option",28),d.Lb(),d.Lb(),d.Mb(11,"td",9),d.Ib(12,"input",29),d.Lb(),d.Mb(13,"td",9),d.Mb(14,"select",30),d.bc(15,f,2,3,"option",28),d.Lb(),d.Lb(),d.Mb(16,"td",9),d.Ib(17,"input",31),d.Lb(),d.Mb(18,"td",9),d.Ib(19,"input",32),d.Lb(),d.Mb(20,"td",10),d.Mb(21,"button",33),d.Tb("click",(function(){d.Yb(t);const r=e.index;return d.Vb().remove(r)})),d.cc(22,"\u0418\u0437\u0431\u0440\u0438\u0448\u0438 "),d.Lb(),d.Lb(),d.Lb(),d.Jb()}if(2&t){const t=e.$implicit,r=e.index,i=d.Vb();d.xb(1),d.Wb("formGroup",t),d.xb(2),d.dc(r+1),d.xb(7),d.Wb("ngForOf",i.measureAndAmount),d.xb(5),d.Wb("ngForOf",i.ddvRate),d.xb(2),d.Wb("value",t.get("priceBeforeTax").value*t.get("totalRequired").value),d.xb(2),d.Wb("value",t.get("priceBeforeTax").value*t.get("totalRequired").value*t.get("ddvRate").value)}}const L=[{path:"",component:(()=>{class t{constructor(t){this.formBuilder=t,this.destroy$=new s.a,this.measureAndAmount=[{display:"\u041a\u0438\u043b\u043e\u0433\u0440\u0430\u043c",value:"kg"},{display:"\u041b\u0438\u0442\u0430\u0440",value:"lt"},{display:"\u0411\u0440\u043e\u0458",value:"br"}],this.ddvRate=[{display:"5%",value:.05},{display:"18%",value:.18}],this.result={priceBeforeDDV:0,priceAfterDDV:0},this.dynamicForm=this.formBuilder.group({items:new o.b([this.getNewItemControl()])}),this.formEndResult=this.formBuilder.group({priceAfterLicitation:[null]})}ngOnInit(){var t;this.dynamicForm.valueChanges.pipe(Object(n.a)(()=>this.dynamicForm.valid),Object(b.a)(t=>this.calculateResult(t.items)),(t=this.destroy$,e=>e.lift(new u(t)))).subscribe(t=>{this.result=t})}calculateResult(t){let e={priceBeforeDDV:0,priceAfterDDV:0};return t.map(t=>{const r=this.calculateSingle(t);e.priceAfterDDV+=r.priceAfterDDV,e.priceBeforeDDV+=r.priceBeforeDDV}),e}calculateSingle(t){const e=t.priceBeforeTax*t.totalRequired;return{priceBeforeDDV:e,priceAfterDDV:e*t.ddvRate}}getNewItemControl(){return this.formBuilder.group({subject:[""],priceBeforeTax:[null,o.n.required],measureAndAmount:["kg",o.n.required],ddvRate:[.05,o.n.required],totalRequired:[null,o.n.required]})}remove(t){this.items.removeAt(t)}addNewItem(){this.items.push(this.getNewItemControl())}get formItems(){return this.dynamicForm.controls}get items(){return this.formItems.items}priceAfterLicitation(){this.items.controls.forEach(t=>{const e=this.calculateReducerPercent(this.formEndResult.get("priceAfterLicitation").value),r=this.calculateReducedValue(t.get("priceBeforeTax").value,e);t.get("priceBeforeTax").patchValue(r)})}calculateReducerPercent(t){return(this.result.priceBeforeDDV-t)/this.result.priceBeforeDDV}calculateReducedValue(t,e){return t-t*e}onSubmit(){this.dynamicForm.invalid||alert("SUCCESS!! :-)\n\n"+JSON.stringify(this.dynamicForm.value,null,4))}submitEndResult(){this.formEndResult.invalid||alert("SUCCESS!! :-)\n\n"+JSON.stringify(this.formEndResult.value,null,4))}onReset(){this.dynamicForm.reset(),this.items.clear()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(e){return new(e||t)(d.Hb(o.c))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-calculations"]],decls:90,vars:7,consts:[[3,"formGroup","ngSubmit"],[1,"card","m-3"],[1,"card-header"],[1,"table","table-hover"],[1,"bg-info"],["scope","col"],["scope","col",1,"btn-action"],[4,"ngFor","ngForOf"],[1,"list-group","list-group-flush"],[1,"align-middle"],[1,"align-middle","btn-action"],["colspan","2",1,"align-middle"],[1,"card-footer","text-center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["type","reset",1,"btn","btn-warning",3,"click"],[1,"container"],[1,"row"],[1,"col-md-6"],["name","edit-product",1,"example-form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","priceAfterLicitation"],["id","priceAfterLicitation","type","number","formControlName","priceAfterLicitation","placeholder","\u0432\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432","title","\u0412\u043a\u0443\u043f\u043d\u0430\u0442\u0430 \u0446\u0435\u043d\u0430 \u043d\u0430 \u0441\u0442\u0430\u0432\u043a\u0430\u0442\u0430 \u0431\u0435\u0437 \u0432\u043a\u043b\u0443\u0447\u0435\u043d\u043e \u0434\u0434\u0432",1,"form-control"],["type","button",1,"btn","btn-success",3,"click"],[1,"bg-primary",3,"formGroup"],["scope","row"],["type","text","formControlName","subject","title","\u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0430 \u043d\u0430\u0431\u0430\u0432\u043a\u0430\u0442\u0430 \u043e\u0434\u043d\u043e\u0441\u043d\u043e \u043e\u043f\u0438\u0441 \u043d\u0430 \u0441\u0442\u043e\u043a\u0430\u0442\u0430 \u043a\u043e\u0458\u0430 \u0441\u0435 \u043f\u043e\u0431\u0430\u0440\u0443\u0432\u0430 \u0438 \u043c\u043e\u0436\u0435\u0431\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0438 \u0438\u043b\u0438 \u0433\u0440\u0430\u043c\u0430\u0436\u0430","placeholder","\u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0430 \u043d\u0430\u0431\u0430\u0432\u043a\u0430",1,"form-control"],["type","number","formControlName","totalRequired","placeholder","\u0432\u043a\u0443\u043f\u043d\u0430 \u043f\u043e\u0431\u0430\u0440\u0430\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0434 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434","title","\u0432\u043a\u0443\u043f\u043d\u0430 \u043f\u043e\u0431\u0430\u0440\u0430\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0434 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434.\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u043b\u0438\u0442\u0430\u0440 \u041c\u043b\u0435\u043a\u043e \u0441\u0435 \u043f\u0438\u0448\u0443\u0432\u0430 60 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0441\u043a\u0438 \u0441\u0435 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u0443\u0432\u0430 \u0432\u043e \u043b\u0438\u0442\u0440\u0438","onkeydown","return event.keyCode !== 69","required","",1,"form-control"],["id","measureAndAmount","title","\u0415\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u043c\u0435\u0440\u043a\u0430 \u0438 \u043a\u043e\u0447\u0438\u043d\u0430 \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043e\u0442 , \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u0438\u0434\u0435 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c \u201e\u043a\u0433\u201c , \u043b\u0438\u0442\u0430\u0440 \u201e\u043b\u0442\u201c \u0438 \u0431\u0440\u043e\u0458 \u201e\u0431\u0440\u201c ","formControlName","measureAndAmount","required","",1,"form-control"],["class","align-center",3,"value","title",4,"ngFor","ngForOf"],["type","number","title","\u0426\u0435\u043d\u0430 \u043f\u043e \u0435\u0434\u0438\u043d\u0438\u0446\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434 - \u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043b\u043a\u0443 \u0435 \u0446\u0435\u043d\u0430\u0442\u0430 \u043d\u0430 \u041b\u0438\u0442\u0430\u0440 \u041c\u043b\u0435\u043a\u043e , \u0438\u043b\u0438 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c \u0458\u0430\u0431\u043e\u043b\u043a\u0430","formControlName","priceBeforeTax","placeholder","\u0435\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u0446\u0435\u043d\u0430 \u0446\u0435\u0437 \u0434\u0434\u0432","onkeydown","return event.keyCode !== 69","required","",1,"form-control"],["id","ddvRate","title","\u0421\u0442\u0430\u043f\u043a\u0430\u0442\u0430 \u043d\u0430 \u0434\u0434\u0432 \u043f\u043e \u043a\u043e\u0458\u0430 \u0442\u0440\u0435\u0431\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u0430 \u043e\u0432\u043e\u0458 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434","formControlName","ddvRate","required","",1,"form-control"],["type","number","placeholder","\u0432\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432","disabled","","title","\u0412\u043a\u0443\u043f\u043d\u0430\u0442\u0430 \u0446\u0435\u043d\u0430 \u043d\u0430 \u0441\u0442\u0430\u0432\u043a\u0430\u0442\u0430 \u0431\u0435\u0437 \u0432\u043a\u043b\u0443\u0447\u0435\u043d\u043e \u0434\u0434\u0432",1,"form-control",3,"value"],["type","number","placeholder","\u0432\u043a\u0443\u043f\u043do \u0434\u0434\u0432","disabled","","title","\u0412\u043a\u0443\u043f\u043d\u043e \u0434\u0434\u0432",1,"form-control",3,"value"],["type","button",1,"btn","btn-danger",3,"click"],[1,"align-center",3,"value","title"]],template:function(t,e){1&t&&(d.Mb(0,"form",0),d.Tb("ngSubmit",(function(){return e.onSubmit()})),d.Mb(1,"div",1),d.Mb(2,"h5",2),d.cc(3,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0435\u0441\u043c\u0435\u0442\u043a\u0430"),d.Lb(),d.Mb(4,"table",3),d.Mb(5,"thead"),d.Mb(6,"tr",4),d.Ib(7,"th",5),d.Mb(8,"th",5),d.cc(9,"1"),d.Lb(),d.Mb(10,"th",5),d.cc(11,"2"),d.Lb(),d.Mb(12,"th",5),d.cc(13,"3"),d.Lb(),d.Mb(14,"th",5),d.cc(15,"4"),d.Lb(),d.Mb(16,"th",5),d.cc(17,"5"),d.Lb(),d.Mb(18,"th",5),d.cc(19,"6"),d.Lb(),d.Mb(20,"th",5),d.cc(21,"7"),d.Lb(),d.Ib(22,"th",6),d.Lb(),d.Mb(23,"tr",4),d.Mb(24,"th",5),d.cc(25,"#"),d.Lb(),d.Mb(26,"th",5),d.cc(27,"\u0412\u0438\u0434 \u0438 \u043e\u043f\u0438\u0441 \u043d\u0430 \u0441\u0442\u043e\u043a\u0430"),d.Lb(),d.Mb(28,"th",5),d.cc(29,"\u0432\u043a\u0443\u043f\u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043f\u043e \u0415\u0434\u0438\u043d.\u041c\u0435\u0440\u043a\u0430"),d.Lb(),d.Mb(30,"th",5),d.cc(31,"\u0415\u0434\u0438\u043d.\u041c\u0435\u0440\u043a\u0430 \u0438 \u043a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 "),d.Lb(),d.Mb(32,"th",5),d.cc(33,"\u0415\u0434\u0438\u043d\u0435\u0447\u043d\u0430 \u0426\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432."),d.Lb(),d.Mb(34,"th",5),d.cc(35,"\u0441\u0442\u0430\u043f\u043a\u0430 \u043d\u0430 \u0434\u0434\u0432 (5%/18%)"),d.Lb(),d.Mb(36,"th",5),d.cc(37,"\u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432"),d.Lb(),d.Mb(38,"th",5),d.cc(39,"\u0412\u043a\u0443\u043f\u043d\u043e \u0434\u0434\u0432"),d.Lb(),d.Ib(40,"th",6),d.Lb(),d.Lb(),d.Mb(41,"tbody"),d.bc(42,h,23,6,"ng-container",7),d.Mb(43,"tr",8),d.Ib(44,"td",9),d.Ib(45,"td",9),d.Ib(46,"td",9),d.Ib(47,"td",9),d.Ib(48,"td",9),d.Mb(49,"td",9),d.cc(50," \u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0431\u0435\u0437 \u0434\u0434\u0432 "),d.Lb(),d.Ib(51,"td",10),d.Mb(52,"td",10),d.cc(53),d.Lb(),d.Lb(),d.Mb(54,"tr",8),d.Ib(55,"td",9),d.Ib(56,"td",9),d.Ib(57,"td",9),d.Ib(58,"td",9),d.Ib(59,"td",9),d.Mb(60,"td",11),d.cc(61," \u0412\u043a\u0443\u043f\u043do \u0434\u0434\u0432 "),d.Lb(),d.Mb(62,"td",10),d.cc(63),d.Lb(),d.Lb(),d.Mb(64,"tr",8),d.Ib(65,"td",9),d.Ib(66,"td",9),d.Ib(67,"td",9),d.Ib(68,"td",9),d.Ib(69,"td",9),d.Mb(70,"td",11),d.cc(71," \u0412\u043a\u0443\u043f\u043d\u0430 \u0446\u0435\u043d\u0430 \u0441\u043e \u0434\u0434\u0432 "),d.Lb(),d.Mb(72,"td",10),d.cc(73),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(74,"div",12),d.Mb(75,"button",13),d.Tb("click",(function(){return e.addNewItem()})),d.cc(76,"\u0414\u043e\u0434\u0430\u0434\u0438 \u041d\u043e\u0432"),d.Lb(),d.Mb(77,"button",14),d.Tb("click",(function(){return e.onReset()})),d.cc(78,"\u0418\u0441\u0447\u0438\u0441\u0442\u0438 \u0441\u0435"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(79,"div",15),d.Mb(80,"div",16),d.Ib(81,"div",17),d.Mb(82,"div",17),d.Mb(83,"form",18),d.Tb("ngSubmit",(function(){return e.submitEndResult()})),d.Mb(84,"div",19),d.Mb(85,"label",20),d.cc(86," \u0412\u043d\u0435\u0441\u0435\u0442\u0435 \u043a\u043e\u0458\u0430 \u0435 \u0446\u0435\u043d\u0430\u0442\u0430 \u043f\u043e\u0441\u043b\u0435 \u043b\u0438\u0446\u0438\u0442\u0430\u0446\u0438\u0458\u0430\u0442\u0430 \u043e\u0434\u043d\u043e\u0441\u043d\u043e \u0458\u0430\u0432\u043d\u043e\u0442\u043e \u043d\u0430\u0434\u0434\u0430\u0432\u0430\u045a\u0435"),d.Lb(),d.Ib(87,"input",21),d.Lb(),d.Mb(88,"button",22),d.Tb("click",(function(){return e.priceAfterLicitation()})),d.cc(89,"\u041f\u0440\u0435\u0441\u043c\u0435\u0442\u0430\u0458 \u043f\u043e \u043a\u0440\u0430\u0458\u043d\u0430 \u0446\u0435\u043d\u0430"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.Wb("formGroup",e.dynamicForm),d.xb(42),d.Wb("ngForOf",e.items.controls),d.xb(11),d.ec(" ",e.result.priceBeforeDDV," \u0414\u0435\u043d\u0430\u0440\u0438 "),d.xb(10),d.ec(" ",e.result.priceAfterDDV," \u0414\u0435\u043d\u0430\u0440\u0438 "),d.xb(10),d.ec(" ",e.result.priceAfterDDV+e.result.priceBeforeDDV," \u0414\u0435\u043d\u0430\u0440\u0438 "),d.xb(2),d.Wb("disabled",!e.dynamicForm.valid),d.xb(8),d.Wb("formGroup",e.formEndResult))},directives:[o.p,o.h,o.e,m.h,o.j,o.a,o.g,o.d,o.l,o.m,o.i,o.o],styles:["tr[_ngcontent-%COMP%]{display:table-row}"]}),t})()}];let M=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(e){return new(e||t)},imports:[[c.a.forChild(L)],c.a]}),t})(),v=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(e){return new(e||t)},imports:[[i.a,M]]}),t})()}}]);