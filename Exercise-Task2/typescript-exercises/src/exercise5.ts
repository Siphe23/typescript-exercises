//Exercise: 5 Basic Calculator
//Objective
class Calculator {
    
    private validateInput(num1: any, num2: any): void {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both inputs must be numbers.');
      }
    }

    public add(num1: number, num2: number): number {
      this.validateInput(num1, num2);
      return num1 + num2;
    }
  
    
    public subtract(num1: number, num2: number): number {
      this.validateInput(num1, num2);
      return num1 - num2;
    }
  
    
    public multiply(num1: number, num2: number): number {
      this.validateInput(num1, num2);
      return num1 * num2;
    }
  
    
    public divide(num1: number, num2: number): number {
      this.validateInput(num1, num2);
      if (num2 === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return num1 / num2;
    }
  }
  
  //print all my output
  const calculator = new Calculator();
  console.log('Addition: ', calculator.add(10.5, 5.3));        
  console.log('Subtraction: ', calculator.subtract(10.5, 5.3)); 
  console.log('Multiplication: ', calculator.multiply(10.5, 5.3)); 
  console.log('Division: ', calculator.divide(10.5, 5.3));       
  

  