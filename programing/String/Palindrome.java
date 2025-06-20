import java.util.Scanner;

public class Palindrome{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("input your string");
        String st=sc.nextLine(); 
        char []chararr=st.toCharArray(); 
        CheckPalin(chararr);
    }
      static void CheckPalin(char []arr){
       int i=0;
       int j=arr.length-1;
         while(i<j){
          if(arr[i]!=arr[j]){
             System.out.println("not palindrome ");
             return ;
          }
            i++;
            j--;
      }
      System.out.println("palindrome");
      }


    




}
