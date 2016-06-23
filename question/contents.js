/**
 * Created by mac on 16/6/22.
 */
(function(){
    function contents(data){

        this._data = data;
        //console.log(this._data);
        this._title = document.getElementById("title");
        this._A = document.getElementById("A");
        this._B = document.getElementById("B");
        this._C = document.getElementById("C");
        this._D = document.getElementById("D");

        this._title.innerHTML = this._data[i].title;
        this._A.innerHTML = this._data[i].A;
        this._B.innerHTML = this._data[i].B;
        this._C.innerHTML = this._data[i].C;
        this._D.innerHTML = this._data[i].D;

    };

    window.contents = contents;
})();