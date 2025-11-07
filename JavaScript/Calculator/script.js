    // Clear Logic
        function Clr ()
        {
            document.getElementById("inbx").value="";
        }

    // remove last number
        function slicedata(){
            var slc = document.getElementById("inbx").value;
            var res= slc.slice(0, -1);
            document.getElementById("inbx").value=res;
        }

    // numbr logic

        function number(val) 
        {
            document.getElementById("inbx").value += val;
        }

    // arithamatic Operator

        function arith()
        {
            let x =document.getElementById("inbx").value;
            let y = eval(x);
            document.getElementById("inbx").value = y;
        }

    // squre

        function sqr(){
            var sqr = document.getElementById("inbx").value;
            var res = Math.pow(sqr,2);
            document.getElementById("inbx").value = res; 
        }

        
    // squreRoot

        function sqrRoot(){
            var sqrt = document.getElementById("inbx").value;
            var res = Math.sqrt(sqrt,2);
            document.getElementById("inbx").value = res; 
        }   