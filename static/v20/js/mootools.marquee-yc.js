Fx.Marquee=new Class({Extends:Fx.Morph,options:{mode:"horizontal",message:"",revert:true,delay:5000,cssClass:"msg",showEffect:{opacity:1},hideEffect:{opacity:0},revertEffect:{opacity:[0,1]},currentMessage:null},initialize:function(a,b){a=$(a);var c=this.options.currentMessage||(a.getChildren().length==1)?a.getFirst():"";var d=new Element("div",{styles:{position:"relative"},"class":"fxMarqueeWrapper"}).inject(a);this.parent(d,b);this.current=this.wrapMessage(c)},wrapMessage:function(a){if($(a)&&$(a).hasClass("fxMarquee")){var b=$(a)}else{var b=new Element("span",{"class":"fxMarquee",styles:{position:"relative"}});if($(a)){b.grab($(a))}else{if($type(a)=="string"){b.set("html",a)}}}return b.inject(this.element)},announce:function(a){this.setOptions(a).showMessage();return this},showMessage:function(a){(function(){var b=this.$chain?$A(this.$chain):[];this.clearChain();this.element=$(this.element);this.current=$(this.current);this.message=$(this.message);this.start(this.options.hideEffect).chain(function(){if(a){this.message.style.display="none";if(this.current){this.current.style.display=""}}else{if(this.message){this.message.dispose()}this.message=this.wrapMessage(this.options.message);if(this.current){this.current.style.display="none"}}this.start((a)?this.options.revertEffect:this.options.showEffect).chain(function(){if(this.$chain){this.$chain.combine(b)}else{this.$chain=b}this.fireEvent((a)?"onRevert":"onMessage");if(!a&&this.options.revert){this.showMessage(true)}else{this.callChain.delay(this.options.delay,this)}}.bind(this))}.bind(this))}).delay((a)?this.options.delay:10,this);return this}});