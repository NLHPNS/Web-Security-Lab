# Web-Security-Lab

## Description

This is a web project that I build to do the security test.
I build this starting from 0. There will be development journal below.

## Journal

### Day 1
I have set up the basic framework of the website.
I added index.html for the front-end website.

### Day 2
I have installed npm and express for back-end server.
I added Server.js.

### Day 3
I installed argon2 for hashing password to make the server secure.
I implemented Register for the website.

### Day 4
I optimized the registration, added code for checking repeated user name, empty
input as well as short password.

I have done the first security review:
What am I protecting? ---> User credentials
Who are the attackers? ---> Any internet user

Since the attacker controls the browser, we should not trust any input from
client. For example, the attacker may use integer on password instead of string:
```
fetch("/register", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    userName: "TestUser",
                    thePassword: 114514
                })
            });
```
```
The attacker may spoil the server:
TypeError [ERR_INVALID_ARG_TYPE]: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received type number (12345678)
```
I have observed and tested other vulnerabilities such as:
- illegal user name
- interger used in login

### Day 5
User enumeration via time