<script context="module">
    export const meta = {
        title: 'Sign-up Page', 
    };
</script>

<body class="h-screen w-screen flex flex-col items-center justify-center" style="background-color: #bae8cb;">
    <div class="grid grid-cols-3 gap-4 h-full">
        <div class="col-span-1 h-full">
            <img class="object-fill h-full w-full" src="./img/loginimage.jpg" alt=":O">
        </div>
        <div class="col-span-2 flex flex-col justify-start items-center">
            <h1 class="h1 font-bold mb-10 mt-10 p-15 text-gray-950">Sign Up to QuickTable!</h1>
            <form class="text-gray-950">
                <label for="signupEmail" class="py-1">Email:</label>
                <input type="email" name="signupEmail" id="signupEmail" class="p-3 mb-3">
                <label for="signupPassword" class="py-1">Password:</label>
                <input type="password" name="signupPassword" id="signupPassword" class="p-3 mb-3">
                <label for="signupConfirmPassword" class="py-1">Confirm Password:</label>
                <input type="password" name="signupConfirmPassword" id="signupConfirmPassword" class="p-3">
                <br>
                <input type="submit" value="Signup" class="btn variant-filled-secondary ml-5 mt-6">
                <p class="inline-block p-1" style="font-size: larger;">or</p>
                <a  class="underline p-1 bg-secondary-hover-token" style="font-size: larger;" href="/Login">Log in</a>
            </form>
        </div>
    </div>
</body>
