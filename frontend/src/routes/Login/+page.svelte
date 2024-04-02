<script context="module">
    export const meta = {
        title: 'Login Page', 
    };
</script>

<body class="h-screen w-screen flex flex-col items-center justify-center" style="background-color: #bae8cb;">
    <div class="grid grid-cols-3 gap-4 h-full">
        <div class="col-span-1 h-full">
            <img class="object-fill h-full w-full" src="./img/loginimage.jpg" alt=":O">
        </div>
        <div class="col-span-2 flex flex-col justify-start items-center">
            <h1 class="h1 font-bold mb-10 mt-10 p-15 text-gray-950">Log Into Your Account!</h1>
            <form class="text-gray-950">
                <label for="loginEmail" class="py-1">Email:</label>
                <input type="email" name="loginEmail" id="loginEmail" class="p-3 mb-3">
                <label for="loginPassword" class="py-1">Password:</label>
                <input type="password" name="loginPassword" id="loginPassword" class="p-3">
                <br>
                <input type="submit" value="Login" class="btn variant-filled-secondary ml-5 mt-6">
                <p class="inline-block p-1" style="font-size: larger;">or</p>
                <a  class="underline p-1 bg-secondary-hover-token" style="font-size: larger;" href="/Signup">Sign Up</a>
            </form>
        </div>
    </div>
</body>
