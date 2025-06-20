import java.util.*;
public class Prime{
    public static void main(String[] args) {
    Scanner sc =new Scanner(System.in);
    System.out.println("give the your number"); 
   int x=sc.nextInt(); 
  checkprime(x);
}
static void checkprime(int x){
   if(x<=1){
    System.out.println("not prime");
    return ;
   }
 else  if(x>1){
 for(int i=2;i<x;i++){
       if(x%i==0){
        System.out.println("not a prime number");
        return ;
       }
 }
System.out.println("prime number");
}
}
}
