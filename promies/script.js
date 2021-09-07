const p =new Promise((resovle, reject) => {
    //resovle, reject - лямбды (функции)
    if (true){
        resovle([1, 2, 5, 68]);//все ок
    }else {
        reject('some error');//bad
    }

}); 

//если в промисе сработал resolve, то вызовется лябда, которая указана в thene
//                        reject, то лямбда, из catch
p.then((arr) => {
    console.log('ok');
    return arr.filter(e => e < 10)
})
.then((arr) =>{
    return arr.reduce((prev, v) => prev + v);
})
.then((result) => {
    console.log(result);
})
.catch((e) => {
    console.log(e);
});
console.log('continue')

// любая насинхронная фунция оборачивает возвращаемый результат в объект Promise
async function test() {
    return 123;
}
const res =test();
console.log(res);

async function test2() {
    const res = await test(); //вернет than 123
    console.log(res);
}
test2()
