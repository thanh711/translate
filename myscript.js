function myFunction() {
  const mylist = [
    { firstName: "CLR stands for", lastName: "D. Common Language Runtime" },
    { firstName: "You are creating a Hello World console application. You want to print a \"Hello world\"message to the console window.Which line of code should you use?", lastName: "A. Console.WriteLine(\"Hello world\");" },
    { firstName: "In C# programming the Main method is where program starts execution. It is the main entry point of program that executes all the objects and invokes method to execute.How many Main method can be in one application?", lastName: "B. Only one Main method" },
    { firstName: "In Visual Studio 2017, you are opening a C# console application. You want to use a external assembly. Which component of project that you use to add the assembly?", lastName: "B. References" },
    { firstName: "Given the following code what will be output?", lastName: "C. 10 and 40" },
    {
      firstName: "Which of the following expressions are legal? (Choose one or more.)",
      lastName: "A. String x = “Hello”; int y = 9; x += y;||C. String x = “Hello” ; int y = 9; x = x + y;"
    },
    { firstName: "What would be the output from this code fragment?", lastName: "D. message four" },
    { firstName: "What results from the following fragment of code?", lastName: "A. Compilation fails because of an error in line 2" },
    { firstName: "Which statement is correct about following c#.NET code?", lastName: "C. ‘a’ is a reference to an object of a class that compiler drives from ‘System.Array’ class" },
    { firstName: "Which statement is true about the following code fragment?", lastName: "B. The program will not compile, because of the lack of \"break\" at line 4" },
    {
      firstName: "Which of the following statements will compile without an error? (Choose all that apply.)",
      lastName: "A. int[] arr;||D. int[] arr = {1,2,3,4,5};"
    },
    { firstName: "Which is the correct way of defining and initializing an array of 3 integers?", lastName: "D. int[] a; a = new int{78, 9, 54};" },
    { firstName: "Output of following Net program?", lastName: "B. Not Same" },
    { firstName: "Which of the calls listed below modify the string? (Choose two)", lastName: "B. str.Replace(‘e’ ,‘3’);||str.Substring(6);" },
    {
      firstName: "Which one statement is true about the code below?",
      lastName: "A. Lines 4 and 6 both execute."
    },
    {
      firstName: "Which of the following are legal operations?",
      lastName: "A. s3 = s1 + s2;"
    },
    {
      firstName: "What results from running the following code?",
      lastName: "A. The output: value is Hello"
    },
    {
      firstName: "Which two are valid declarations of a String? (Choose two.)",
      lastName: "A. string s1 = null;||D. string s5 = “Using Strings rule”;"
    },
    //29
    {
      firstName: "What is the result?",
      lastName: "C. count=3"
    },
    {
      firstName: "What will happen when you compile and run the following code?",
      lastName: "B. Compile fail: \"Mine \" dose not implement inherited abstract member 'MinBase.amethod()'"
    },
    {
      firstName: "What will happen when you compile and run the following code?",
      lastName: "B. 0"
    },
    {
      firstName: "Which is the default access modifier for an interface method?",
      lastName: "A. public"
    },
    {
      firstName: "Which method is used to call the constructors of the superclass from the subclass?",
      lastName: "D. Constructors name() : base(argument)"
    },
    {
      firstName: "Which one statement is true about the application below?",
      lastName: "C. The code compiles, and execution produces the output x = 11."
    },
    //35
    {
      firstName: "How do you achieve multiple inheritance in C#?",
      lastName: "A. interface"
    },
    {
      firstName: "If you do not implement all the methods of an interface while implementing, what specifier should you use for the class ?",
      lastName: "C. abstract"
    },
    {
      firstName: "What is an example of polymorphism?",
      lastName: "C. Method overloading"
    },
    {
      firstName: "Which of the following statements can be used to describe a public method?",
      lastName: "A. It is accessible to all other classes in the hierarchy||C. It represents the public interface of its class"
    },
    {
      firstName: "Which two of these statements are true about constructors? (Choose two.)",
      lastName: "A. The constructor in C# has the same name as class or struct||D. There are two types of constructors in C #: Default constructor"
    },
    {
      firstName: "If you decide to overload a method of its base class what may you optionally change?",
      lastName: "B. The parameter list"
    },
    {
      firstName: "Which method would not be legal in a subclass of Foo? (Choose two.)",
      lastName: "B. public override string doStuff(int x) { return x; }||C. public override string doStuff(int x) { return \"Bye\"; }"
    },
    {
      firstName: "Which two methods, if inserted independently at line 8, will not compile? (Choose two.)",
      lastName: "B. protected override int doStuff(int x, float y) { return 4; }||C. private override int doStuff(int x, float y) { return 4; }"
    },
    {
      firstName: "The this keyword refers to the current ___ of the class",
      lastName: "B. instance"
    },
    {
      firstName: "The keyword that makes a variable belong to a class, rather than being defined for each instance of the class.",
      lastName: "A. static"
    },
    {
      firstName: "Which of these statements regarding the following code are correct?",
      lastName: "D. None of the above"
    },
    //47
    {
      firstName: "What will be the output of the program?",
      lastName: "C. BDE"
    },
    {
      firstName: "______ is a base class of all exception classes",
      lastName: "B. ExceptionLogger.LogException(ex);"
    },
    {
      firstName: "If a statement tries to divide by zero which exception is thrown?",
      lastName: "A. ArithmeticException"
    },
    {
      firstName: "If an exception is generated in try block , then it is caught in ____ block",
      lastName: "C. catch"
    },
    {
      firstName: "Let guess the output of the following code when you compile and run it:",
      lastName: "C. There is no a compile time error, but an exception occurs during program execution."
    },
    {
      firstName: "Let guess the output of the following code when you try to compile and run it, and there is no file with name \"\"NetCodingConvention.txt\"\" in the current directory?",
      lastName: "C. No such file found, Doing finally, -1"
    },
    {
      firstName: "The finally block is executed when an exception is thrown, even if no catch matches it.",
      lastName: "A. TRUE"
    },
    {
      firstName: "The possible method to handle the exception is _______",
      lastName: "D. The \"nearest\" method in the call stack has the exception handler"
    },
    {
      firstName: "The subclass exception should precede the base class exception when used within the catch clause.",
      lastName: "A. TRUE"
    },
    {
      firstName: "What is the result of compiling and running the following code?",
      lastName: "B. 13"
    },
    {
      firstName: "How should you complete the relevant code?",
      lastName: "A. 1,2,3"
    },
    {
      firstName: "What is wrong with the following?",
      lastName: "C. The method rightHere() is not defined correctly"
    },
    {
      firstName: "What will be the output of the program?",
      lastName: "A. Finally"
    },
    {
      firstName: "What will be the output of the program?",
      lastName: "D. None of the above"
    },
    {
      firstName: "What will be the output of the program?",
      lastName: "C. Compilation fails."
    },
    {
      firstName: "When will the exception occured?",
      lastName: "D. At the run-time if any problem interrupts the normal flow of the program."
    },
    {
      firstName: "When would you throw an exception? Please select the best answer.",
      lastName: "C. When you want to inform the calling routine of a problem"
    },
    {
      firstName: "Which block gets executed compulsory whether the exception is caught or not.",
      lastName: "B. finally"
    },
    {
      firstName: "Which code, inserted at the demanded place, allows the Sprite class to compile?",
      lastName: "D. Nav.Direction d = Nav.Direction.NORTH;"
    },
    {
      firstName: "Which one of the following statements is false?",
      lastName: "C. A checked exception class name must always appear in a throws clause."
    },
    //68
    {
      firstName: "Which among the following is the correct way to find out the number of elements currently present in an ArrayList Collection called arr?",
      lastName: "B. arr.Count"
    },
    {
      firstName: "Can null value be added to a List?",
      lastName: "A. Yes"
    },
    {
      firstName: "You are developing an application that includes a class named Order. The application will store a collection of Order objects. The collection must meet the following requirements: 1. Use strongly typed members. 2. Process Order objects in first-in-first-out order. 3. Store values for each Order object. 4. Use zero-based indices. You need to use a collection type that meets the requirements. Which collection type should you use?",
      lastName: "Queue<T>"
    },
    {
      firstName: "You are developing an application that includes a class named Order. The application will store a collection of Order objects. The collection must meet the following requirements: 1. Internally store a key and a value for each collection item. 2. Provide objects to iterators in ascending order based on the key. 3. Ensure that item are accessible by zero-based index or by key. You need to use a collection type that meets the requirements. Which collection type should you use?",
      lastName: "SortedList"
    },
    {
      firstName: "You need to remove all of the data from the myData list. Which code should you use?",
      lastName: "foreach(string currentString in myData) myData . Remove(currentString) ;"
    },
    {
      firstName: "You have the following code:",
      lastName: "B. false, false, true"
    },
    {
      firstName: "You need to retrieve all of the numbers from the items variable that are greater than 80? Which code should you use?",
      lastName: "var result = from i in items where i > 80 select i;"
    },
    {
      firstName: "Which collection class(es) allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?",
      lastName: "B. java.util.ArrayList"
    },
    {
      firstName: "What is the result?",
      lastName: "B. 2 2 3 4"
    },
    {
      firstName: "Which are TRUE? (Choose two.)",
      lastName: "B. The size of s is 5||D. The size of subs is 3"
    },
    {
      firstName: "Which inserted independently at line 9, will compile?",
      lastName: "B. return new ArrayList();"
    },
    {
      firstName: "Given the following code, which of the following statements can be used to determine if \"\"cat\"\" can be found in the list?",
      lastName: "A. list.contains(\"cat\")||C. list.indexOf(\"cat\")"
    },
    {
      firstName: "What is the result?",
      lastName: "D. An exception is thrown at runtime"
    },
    {
      firstName: "Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object ?",
      lastName: "C. java.lang.StringBuffer"
    },
    {
      firstName: "You need to store elements in a collection that guarantees that no duplicates are stored and all elements can be accessed in natural order. Which interface provides that capability",
      lastName: "B. java.util.Set"
    },
    {
      firstName: "Which interface does java.util.Hashtable implement?",
      lastName: "A. java.util.Map"
    },
    {
      firstName: "Which interface provides the capability to store objects using a key-value pair?",
      lastName: "A. java.util.Map"
    },
    {
      firstName: "Which collection class allows you to associate its elements with key values, and allows you to retrieve objects in FIFO (first-in, first-out) sequence?",
      lastName: "B. java.util.LinkedHashMap"
    },
    //86
    {
      firstName: "The ____ contains types that allow reading and writing to files and data streams, and types that provide basic file and directory support.",
      lastName: "A. System.IO namespace"
    },
    {
      firstName: "What is the result?",
      lastName: "line 1"
    },
    {
      firstName: "What is the result? (Choose all that apply.)",
      lastName: "B. done"
    },
    {
      firstName: "What would be the output for following input from the console as a character?",
      lastName: "D. Run time error"
    },
    {
      firstName: "Choose the filemode method which is used to create a new output file with the condition that the file with same name if exists will destroy the old file:",
      lastName: "A. FileMode.CreateNew|| B. FileMode.Create"
    },
    {
      firstName: "And given that myfile.txt contains the following two lines of data:",
      lastName: "ab xuong dong cd"
    },
    {
      firstName: "Which of these exception is thrown in cases when the file specified for writing it not found?",
      lastName: "C. FileNotFoundException"
    },
    {
      firstName: "Which of the following is a type of stream in C#?",
      lastName: "C. Float stream"
    },
  ];



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
    for (let i = 0; i < mylist.length; i++) {
      if (mylist[i].firstName.includes(question)) {
        result = result + mylist[i].lastName + "-";
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

function myFunction2() {
  const mylist = [
    { firstName: "CLR stands for", lastName: "D. Common Language Runtime" },
    { firstName: "You are creating a Hello World console application. You want to print a \"Hello world\"message to the console window.Which line of code should you use?", lastName: "A. Console.WriteLine(\"Hello world\");" },
    { firstName: "In C# programming the Main method is where program starts execution. It is the main entry point of program that executes all the objects and invokes method to execute.How many Main method can be in one application?", lastName: "B. Only one Main method" },
    { firstName: "In Visual Studio 2017, you are opening a C# console application. You want to use a external assembly. Which component of project that you use to add the assembly?", lastName: "B. References" },
    { firstName: "Given the following code what will be output?", lastName: "C. 10 and 40" },
    {
      firstName: "Which of the following expressions are legal? (Choose one or more.)",
      lastName: "A. String x = “Hello”; int y = 9; x += y;||C. String x = “Hello” ; int y = 9; x = x + y;"
    },
    { firstName: "What would be the output from this code fragment?", lastName: "D. message four" },
    { firstName: "What results from the following fragment of code?", lastName: "A. Compilation fails because of an error in line 2" },
    { firstName: "Which statement is correct about following c#.NET code?", lastName: "C. ‘a’ is a reference to an object of a class that compiler drives from ‘System.Array’ class" },
    { firstName: "Which statement is true about the following code fragment?", lastName: "B. The program will not compile, because of the lack of \"break\" at line 4" },
    {
      firstName: "Which of the following statements will compile without an error? (Choose all that apply.)",
      lastName: "A. int[] arr;||D. int[] arr = {1,2,3,4,5};"
    },
    { firstName: "Which is the correct way of defining and initializing an array of 3 integers?", lastName: "D. int[] a; a = new int{78, 9, 54};" },
    { firstName: "Output of following Net program?", lastName: "B. Not Same" },
    { firstName: "Which of the calls listed below modify the string? (Choose two)", lastName: "B. str.Replace(‘e’ ,‘3’);||str.Substring(6);" },
    {
      firstName: "Which one statement is true about the code below?",
      lastName: "A. Lines 4 and 6 both execute."
    },
    {
      firstName: "Which of the following are legal operations?",
      lastName: "A. s3 = s1 + s2;"
    },
    {
      firstName: "What results from running the following code?",
      lastName: "A. The output: value is Hello"
    },
    {
      firstName: "Which two are valid declarations of a String? (Choose two.)",
      lastName: "A. string s1 = null;||D. string s5 = “Using Strings rule”;"
    },
    //29
    {
      firstName: "What is the result?",
      lastName: "C. count=3"
    },
    {
      firstName: "What will happen when you compile and run the following code?",
      lastName: "B. Compile fail: \"Mine \" dose not implement inherited abstract member 'MinBase.amethod()'"
    },
    {
      firstName: "What will happen when you compile and run the following code?",
      lastName: "B. 0"
    },
    {
      firstName: "Which is the default access modifier for an interface method?",
      lastName: "A. public"
    },
    {
      firstName: "Which method is used to call the constructors of the superclass from the subclass?",
      lastName: "D. Constructors name() : base(argument)"
    },
    {
      firstName: "Which one statement is true about the application below?",
      lastName: "C. The code compiles, and execution produces the output x = 11."
    },
    //35
    {
      firstName: "How do you achieve multiple inheritance in C#?",
      lastName: "A. interface"
    },
    {
      firstName: "If you do not implement all the methods of an interface while implementing, what specifier should you use for the class ?",
      lastName: "C. abstract"
    },
    {
      firstName: "What is an example of polymorphism?",
      lastName: "C. Method overloading"
    },
    {
      firstName: "Which of the following statements can be used to describe a public method?",
      lastName: "A. It is accessible to all other classes in the hierarchy||C. It represents the public interface of its class"
    },
    {
      firstName: "Which two of these statements are true about constructors? (Choose two.)",
      lastName: "A. The constructor in C# has the same name as class or struct||D. There are two types of constructors in C #: Default constructor"
    },
    {
      firstName: "If you decide to overload a method of its base class what may you optionally change?",
      lastName: "B. The parameter list"
    },
    {
      firstName: "Which method would not be legal in a subclass of Foo? (Choose two.)",
      lastName: "B. public override string doStuff(int x) { return x; }||C. public override string doStuff(int x) { return \"Bye\"; }"
    },
    {
      firstName: "Which two methods, if inserted independently at line 8, will not compile? (Choose two.)",
      lastName: "B. protected override int doStuff(int x, float y) { return 4; }||C. private override int doStuff(int x, float y) { return 4; }"
    },
    {
      firstName: "The this keyword refers to the current ___ of the class",
      lastName: "B. instance"
    },
    {
      firstName: "The keyword that makes a variable belong to a class, rather than being defined for each instance of the class.",
      lastName: "A. static"
    },
    {
      firstName: "Which of these statements regarding the following code are correct?",
      lastName: "D. None of the above"
    },
    //47
    {
      firstName: "What will be the output of the program?",
      lastName: "C. BDE"
    },
    {
      firstName: "______ is a base class of all exception classes",
      lastName: "B. ExceptionLogger.LogException(ex);"
    },
    {
      firstName: "If a statement tries to divide by zero which exception is thrown?",
      lastName: "A. ArithmeticException"
    },
    {
      firstName: "If an exception is generated in try block , then it is caught in ____ block",
      lastName: "C. catch"
    },
    {
      firstName: "Let guess the output of the following code when you compile and run it:",
      lastName: "C. There is no a compile time error, but an exception occurs during program execution."
    },
    {
      firstName: "Let guess the output of the following code when you try to compile and run it, and there is no file with name \"\"NetCodingConvention.txt\"\" in the current directory?",
      lastName: "C. No such file found, Doing finally, -1"
    },
    {
      firstName: "The finally block is executed when an exception is thrown, even if no catch matches it.",
      lastName: "A. TRUE"
    },
    {
      firstName: "The possible method to handle the exception is _______",
      lastName: "D. The \"nearest\" method in the call stack has the exception handler"
    },
    {
      firstName: "The subclass exception should precede the base class exception when used within the catch clause.",
      lastName: "A. TRUE"
    },
    {
      firstName: "What is the result of compiling and running the following code?",
      lastName: "B. 13"
    },
    {
      firstName: "How should you complete the relevant code?",
      lastName: "A. 1,2,3"
    },
    {
      firstName: "What is wrong with the following?",
      lastName: "C. The method rightHere() is not defined correctly"
    },
    {
      firstName: "What will be the output of the program?",
      lastName: "A. Finally"
    },
    {
      firstName: "What will be the output of the program?",
      lastName: "D. None of the above"
    },
    {
      firstName: "What will be the output of the program?",
      lastName: "C. Compilation fails."
    },
    {
      firstName: "When will the exception occured?",
      lastName: "D. At the run-time if any problem interrupts the normal flow of the program."
    },
    {
      firstName: "When would you throw an exception? Please select the best answer.",
      lastName: "C. When you want to inform the calling routine of a problem"
    },
    {
      firstName: "Which block gets executed compulsory whether the exception is caught or not.",
      lastName: "B. finally"
    },
    {
      firstName: "Which code, inserted at the demanded place, allows the Sprite class to compile?",
      lastName: "D. Nav.Direction d = Nav.Direction.NORTH;"
    },
    {
      firstName: "Which one of the following statements is false?",
      lastName: "C. A checked exception class name must always appear in a throws clause."
    },
    //68
    {
      firstName: "Which among the following is the correct way to find out the number of elements currently present in an ArrayList Collection called arr?",
      lastName: "B. arr.Count"
    },
    {
      firstName: "Can null value be added to a List?",
      lastName: "A. Yes"
    },
    {
      firstName: "You are developing an application that includes a class named Order. The application will store a collection of Order objects. The collection must meet the following requirements: 1. Use strongly typed members. 2. Process Order objects in first-in-first-out order. 3. Store values for each Order object. 4. Use zero-based indices. You need to use a collection type that meets the requirements. Which collection type should you use?",
      lastName: "Queue<T>"
    },
    {
      firstName: "You are developing an application that includes a class named Order. The application will store a collection of Order objects. The collection must meet the following requirements: 1. Internally store a key and a value for each collection item. 2. Provide objects to iterators in ascending order based on the key. 3. Ensure that item are accessible by zero-based index or by key. You need to use a collection type that meets the requirements. Which collection type should you use?",
      lastName: "SortedList"
    },
    {
      firstName: "You need to remove all of the data from the myData list. Which code should you use?",
      lastName: "foreach(string currentString in myData) myData . Remove(currentString) ;"
    },
    {
      firstName: "You have the following code:",
      lastName: "B. false, false, true"
    },
    {
      firstName: "You need to retrieve all of the numbers from the items variable that are greater than 80? Which code should you use?",
      lastName: "var result = from i in items where i > 80 select i;"
    },
    {
      firstName: "Which collection class(es) allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?",
      lastName: "B. java.util.ArrayList"
    },
    {
      firstName: "What is the result?",
      lastName: "B. 2 2 3 4"
    },
    {
      firstName: "Which are TRUE? (Choose two.)",
      lastName: "B. The size of s is 5||D. The size of subs is 3"
    },
    {
      firstName: "Which inserted independently at line 9, will compile?",
      lastName: "B. return new ArrayList();"
    },
    {
      firstName: "Given the following code, which of the following statements can be used to determine if \"\"cat\"\" can be found in the list?",
      lastName: "A. list.contains(\"cat\")||C. list.indexOf(\"cat\")"
    },
    {
      firstName: "What is the result?",
      lastName: "D. An exception is thrown at runtime"
    },
    {
      firstName: "Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object ?",
      lastName: "C. java.lang.StringBuffer"
    },
    {
      firstName: "You need to store elements in a collection that guarantees that no duplicates are stored and all elements can be accessed in natural order. Which interface provides that capability",
      lastName: "B. java.util.Set"
    },
    {
      firstName: "Which interface does java.util.Hashtable implement?",
      lastName: "A. java.util.Map"
    },
    {
      firstName: "Which interface provides the capability to store objects using a key-value pair?",
      lastName: "A. java.util.Map"
    },
    {
      firstName: "Which collection class allows you to associate its elements with key values, and allows you to retrieve objects in FIFO (first-in, first-out) sequence?",
      lastName: "B. java.util.LinkedHashMap"
    },
    //86
    {
      firstName: "The ____ contains types that allow reading and writing to files and data streams, and types that provide basic file and directory support.",
      lastName: "A. System.IO namespace"
    },
    {
      firstName: "What is the result?",
      lastName: "line 1"
    },
    {
      firstName: "What is the result? (Choose all that apply.)",
      lastName: "B. done"
    },
    {
      firstName: "What would be the output for following input from the console as a character?",
      lastName: "D. Run time error"
    },
    {
      firstName: "Choose the filemode method which is used to create a new output file with the condition that the file with same name if exists will destroy the old file:",
      lastName: "A. FileMode.CreateNew|| B. FileMode.Create"
    },
    {
      firstName: "And given that myfile.txt contains the following two lines of data:",
      lastName: "ab xuong dong cd"
    },
    {
      firstName: "Which of these exception is thrown in cases when the file specified for writing it not found?",
      lastName: "C. FileNotFoundException"
    },
    {
      firstName: "Which of the following is a type of stream in C#?",
      lastName: "C. Float stream"
    },
  ];



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
    for (let i = 0; i < mylist.length; i++) {
      if (mylist[i].lastName.includes(question)) {
        result = result + mylist[i].firstName + "-";
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