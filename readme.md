# Full Stack Engineer - Take Home Test
## Homero Silva

1. What do you like about being a programmer or software engineer? What aspects do you not like? 

**What I like its that you never stop learning, some other areas remain a bit more static than sofware, I have to study or take some time to learn how to improve my skills; Also I like the feeling of creating things or sites or whatever, I enjoy creating and testing stuff.** 
**What I dont like its the ego that some people have, you find a lot of toxic people all over the internet, so you need to be aware of who you talk to or ask for advice, honestly I try to be a cool guy and be respectful**

2. What aspects of the working environment (e.g. company culture, team structure, etc...) allow you to do your best work?

**Trust; I like trusting my coworkers and I like when they trust me. If theres no trust no one wont feel comfortable with the collaboration**
**Also, I think its important to have some time or activities related to learning new abilities, like meetups or talks**

3. What is your favorite programming language/stack and why?

**I really enjoy using javascript, I like its flexibility and how it has evolved, while it still has its flaws, I think its getting better every day. I like all of the arrow functions they added to ES6 and all of the new stuff like destructuring, spread, const, let and more. I like it for what it was created, DOM Manipulation, if I have to do backend work I would return to C# but thats another story since its no longer my favorite language.**

4. Starting a new project, how do you decide which database engine to use for your primary database? What factors go into considering a relational database like PostgreSql vs a NoSQL document storage database like MongoDB?

**It depends on the needs of the project, if I know Im going to have relational data, such as customer, orders, details and more I would definetly go with a SQL database, when I need to save a collection of arrays or objects without to many detail I go with No-SQL, where I can aggregate data and its done. You can also have _relational_ data with databases like Mongo but its not recommended as it wasn't build with that purpose.**

5. How do you feel about automated testing? How do you know when you have a sufficient amount of automated tests?

**I think that you should automate most of the things that are a hassle or take significant amount of time, so If I can automate testing I will definetly do it. I think its important to automate builds, linting, deploys and tests. Regarding tests of a project (such as unit tests) a good flag would be codecoverage, but that doens't guarantee some parts of the code will fail. Its important to do code reviews to prevent this and unit test core functionallity and View behaviour**

6. Please share a link to a public repository or a bit of code you are most proud of, why are you proud of this piece of code or project?

**I worked on a side project for my wife, she wanted a todo-list and instead of searching for one I created one for her to fulfill her needs, it is in an hiatus since im using my spare time to study my masters degree but here it is:**

https://github.com/hsilvap/wera-todo

https://wera-todo.firebaseapp.com/

## Coding Challenge:

Clone the github repo and simply do a
```
npm install
npm start 
```

### About bigO:
I went with an _N + M_ approach, nesting the loops would have switched it into _N x M_ and would have made it slower. 

If the data was a numeric ordered list I could have taken advantage of that and do binary search and it would be _Log(NM)_ but since its alphanumerical it doesn't apply (as far as I know!)
``` 
    a.forEach(( rule , index ) => {
        set.add(rule) // (O(n)) 
    })

    b.forEach(( rule , index ) => {
        if(set.has(rule)){ 
            result.add(rule) // (O(n)) 
    }})
``` 

Also I went with a _Set_ instead of an array, why? To prevent more duplicates.

The space complexity O(n) since I am using new variables to find results.

There are other ways to find duplicates, for example using array methods but I think that for this scenario creating my own function was a better aproach than with ES6 functions.
