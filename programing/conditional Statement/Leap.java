import java.util.*;
public class Leap{    
 public static void main(String[] args) {
    Scanner sc =new Scanner(System.in);
    System.out.println("give the input");
       int x=sc.nextInt();  
if (x % 400 == 0) {
    System.out.println("leap year");
} else if (x % 100 == 0) {
    System.out.println("not leap year");
} else if (x % 4 == 0) {
    System.out.println("this is also leap year");
} else {
    System.out.println("not leap year");
}
 }

}
