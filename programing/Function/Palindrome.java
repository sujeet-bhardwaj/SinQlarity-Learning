import java.util.*;
public class Palindrome{
 public static void main(String[] args) {
    Scanner sc =new Scanner(System.in);
    System.out.println("give the your number"); 
    int x=sc.nextInt();
    int number=x;
    int rev=0; 
    while(x>0){
     int rem=x%10;
     rev=rev*10+rem;
     x=x/10;
    }
   if(number==rev){
    System.out.println("this is palindrome");
   } 
   else{
    System.out.println("not a palindrome");
   }
 }
}
