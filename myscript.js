function myFunction() {
            const questionlist = ["CLR stands for",
                "You are creating a Hello World console application. You want to print a \"Hello world\"message to the console window.Which line of code should you use?",
                "In C# programming the Main method is where program starts execution. It is the main entry point of program that executes all the objects and invokes method to execute.How many Main method can be in one application?"];
            const answerlist = ["D. Common Language Runtime",
                "A. Console.WriteLine(\"Hello world\");",
                "B. Only one Main method"];

            var inputvalue = document.getElementById("myTextarea").value;

            var firstindex = inputvalue.indexOf("\n");
            var question = inputvalue.substring(0, firstindex);

            var countresult = 0;
            var result = "";
            // loading
            if (inputvalue != "") {
                document.getElementById("myresult").innerText = "Đang dịch...";
            }
            else {
                document.getElementById("myresult").innerText = "Bản dịch";
            }
            //find
            if (inputvalue.length > 1) {
                for (let i = 0; i < questionlist.length; i++) {
                    if (questionlist[i].includes(question)) {
                        result = result + answerlist[i] + "-";
                        countresult++;
                    }
                }
                if (result != "" && firstindex != -1) {
                    document.getElementById("myTextarea").value = question + "--" + result;
                    document.getElementById("guiphanhoi").innerHTML = "gửi phản hồi";

                } else {
                    document.getElementById("guiphanhoi").innerHTML = "Gửi phản hồi";
                }
            }
            // count char
            var countlenght = inputvalue.length + result.length;
            document.getElementById("countlenght").innerText = countlenght;
        }