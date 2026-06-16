function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter();
counter();
counter();
counter();

//Real life example of above given code.

function createbankaccount(IB){
      let B=IB;
      return {
        deposit(amount){
            B+=amount;
            console.log(B);
        },
        withdraw(amount){
            B-=amount;
            console.log(B);
        },
        checkbalance(){
            console.log(B)
        }
      };
}

const Acc = createbankaccount(2000);
Acc.deposit(500);
Acc.withdraw(600);
Acc.checkbalance();
// console.log(Acc.B); it is not correct because it is not defined in function.

// Can be written
// function createbankaccount(IB){
//       let B=IB;
//       
//         function deposit(amount){
//             B+=amount;
//             console.log(B);
//         }
//         function withdraw(amount){
//             B-=amount;
//             console.log(B);
//         }
//         function checkbalance(){
//             console.log(B)
//         }
//       return {deposit,withdraw,checkbalance};
// }

function multiplier(factor){
    return function(number){// here function name is not defined because it is an anomnouys function.
        return factor*number;
    }
}
const t= multiplier(3);
console.log(t(10));
