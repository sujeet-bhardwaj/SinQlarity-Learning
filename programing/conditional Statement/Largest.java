
import java.util.*;
public class Largest{

 public static void main(String[] args) {
    Scanner sc =new Scanner("System.in");
    int x=sc.nextInt();
    int y=sc.nextInt();
    int z=sc.nextInt();
   if(x>y){
      if(x>z){
        System.out.println(" this is greatest "+x);
      }
      else{
             System.out.println("this is greatest "+z);
      }
  
 }
 else{
        if(y>z){
        System.out.println(" this is greatest "+y);
      }
      else{
             System.out.println("this is greatest "+z);
      } 


 }




 }
}
