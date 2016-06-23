/**
 * Created by mac on 16/6/22.
 */
(function(){
    function question(data){
        this._data = data;
        this.findElements();
        this.addListeners();
        this.addText();
    }
     question.prototype.findElements = function(){
        this._previous = document.getElementById("previous");
        this._next = document.getElementById("next");
        this._explain = document.getElementById("explain");
         this._input = document.getElementsByTagName("input");
         this._submit = document.getElementById("submit");

    };
    question.prototype.addListeners = function() {
        (function (self) {
            self._previous.addEventListener("click", function (event) {
                if (i > 0) {
                    i--;
                }
                contents(self._data);

            });
            self._next.addEventListener("click", function (event) {
                if (i < self._data[i].length) {
                    i++;
                }
                contents(self._data);
            });
            for(var j=0;j<self._input.length;j++){
                self._input[j].addEventListener("click",function(){
                    if(self._data[i].right==this.value){
                        //console.log("回答正确");
                        self._submit.style.backgroundColor = "cyan";
                        self._submit.innerHTML="恭喜你回答正确";
                    }else{
                        //console.log("回答错误");
                        self._submit.style.backgroundColor = "red" ;
                        self._submit.innerHTML="回答错误,正确答案是:"+self._data[i].right;
                    }
                });
                contents(self._data);
            }
            self._explain.addEventListener("click",function(){
                alert(self._data[i].desc) ;
                contents(self._data);
            });


        })(this);
    }
    question.prototype.addText = function(){
        contents(this._data);
    }


    window.question = question;
})();