/**
 * Created by Ayush on 11/22/2017.
 */

// //login API
// $("#loginBtn").click(function () {
//     event.preventDefault();
//    var username = $("#email").val();
//    var password = $("#password").val();
//    var req = {"user":username, "password":password};
//    alert("button clicked");
//
//     $.post("http://laptop-qibi1d15:3000/login",
//         {
//             "user": username,
//             "password": password
//         },
//         function(data, status){
//             alert("Data: " + data + "\nStatus: " + status);
//             window.location.href = "home.html";
//     });
//     // $.ajax({
//     //     type: "POST",
//     //     url: "http://laptop-qibi1d15:3000/login",
//     //     dataType: "json",
//     //     success: function (data) {
//     //         var t = setTimeout(callingRecommender,2000);
//     //     }
//     // });
// });


// $(document).ready(function () {
//     var data = sessionStorage.getItem('userid');
//     if(data == "" || data == null){
//         window.location.href = "index.html";
//     }
// });

var data = sessionStorage.getItem('userid');
if(data == "" || data == null) {
    window.location.href = "index.html";
}
function logout(){
    sessionStorage.clear();
    window.location.href = "index.html";
}

// $("#loginBtn").click(function () {
//     event.preventDefault();
//     var username = $("#email").val();
//     var password = $("#password").val();
//     console.log("Button Clicked");
//     $.post("http://laptop-mohd:3000/login",
//         {
//             user: username,
//             password: password
//         },
//         function(data, status){
//             alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
//             sessionStorage.setItem('userid', data.userid);
//             var data = sessionStorage.getItem('userid');
//             alert(data);
//             window.location.href = "home.html";
//         });
// //         $.ajax({
// //             type: "POST",
// //             data:data,
// //             url: "http://laptop-qibi1d15:3000/login",
// //             dataType: "json",
// //             success: function (data) {
// //                 console.log("Login successful");
// //             }
// //         });
// });

// $("#submitBtn").click(function () {
//     event.preventDefault();
//     var checkboxes = document.querySelectorAll('input[name="technology"]:checked'), values = [];
//     Array.prototype.forEach.call(checkboxes, function(el) {
//         values.push(el.value);
//     });
//     alert(values);
//     var firstName = $("#firstName").val();
//     var lastName = $('#lastName').val();
//     var email = $('#email').val();
//     var password = $('#password').val();
//     var data = {"fname":firstName, "lname":lastName, "email":email, "password":password, "tags":values};
//     $.post("http://laptop-mohd:3000/signup",
//         {
//             fname: firstName,
//             lname: lastName,
//             email: email,
//             password: password,
//             tags: values
//         },
//         function(data, status){
//             alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
// //                    sessionStorage.setItem('userid', data.userid);
// //                    var data = sessionStorage.getItem('userid');
// //                    alert(data);
//             window.location.href = "home.html";
//         });
// });

//function createNote()
//{
//	event.preventDefault();
//    if( $(':checkbox:checked') == true)
//    	{
//    	var type = '1';
//    	}
//    else var type = '0';
//    var authorId = sessionStorage.getItem('userid');			//(author_id, type, title, content, private_group_id)
//    var title = $('#Title').val();
//    var content = $($('#summernote').summernote('code')).text();
//    var groupId = '0';
//    alert(content,title,type);
//    
////    var group = $('#password').val();
////    var data = {"fname":firstName, "lname":lastName, "email":email, "password":password, "tags":values};
//    $.post("http://laptop-mohd:3000/notes/new",
//        {
//            author_id: authorId,
//            type: type,
//            title: title,
//            content: content,
//            private_group_id: groupId
//        },
//        function(data, status){
//            alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
////            sessionStorage.setItem('userid', data.userid);
////            var data = sessionStorage.getItem('userid');
////            alert(data);
//           
//        });
//
//	
//}