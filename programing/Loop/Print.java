package programing.Loop;
import java.util.Scanner;
public class Print{ 
public static void main(String[] args) {
    Scanner sc =new Scanner(System.in);
    System.out.println("give the your number"); 
   int x=sc.nextInt();  
 for(int i=1;i<=x;i++){
    System.out.println("the number is "+i);
 }
}
}
