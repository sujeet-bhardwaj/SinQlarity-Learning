package programing.Loop;

import java.util.Scanner;

public class Factorial{
public static void main(String[] args) {
    Scanner sc =new Scanner(System.in);
    System.out.println("give the your number");
    int fact=1; 
   int x=sc.nextInt();  
 for(int i=x;i>=1;i--){
    fact=fact*i;
 }
System.out.println("factorial of number "+fact);

}



    
}
