package programing.Arrays;

import java.util.Scanner;

public class Complete {
public static void main(String[] args) {
    Scanner sc =new Scanner(System.in);
   System.out.println("give the size of Array");
   int x=sc.nextInt();
   int []arr=new int [x];
    for(int i=0;i<arr.length;i++){
        arr[i]=sc.nextInt();
    }
 }
   
static int [] LargestandSmallest(int []arr){
    int min=Integer.MIN_VALUE;
    int max=Integer.MAX_VALUE;
    int []result=new int [2];
    for(int i=0;i<arr.length;i++){
      if(max<arr[i]){
        max=arr[i];
      }
     if(min>arr[i]){
        min=arr[i];
      }
    }
result[0]=min;
result[0]=max;
return result;
}
static int Sumof(int []arr){
    int sum=0;
    for(int i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
  return sum;
}
static void Copyone(int []arr){
int []copy=new int [arr.length];
for(int i=0;i<arr.length;i++){
   copy[i]=arr[i];
}
}

static int  Duplicate(int []arr){
   for(int i=0;i<=arr.length-2;i++){
     for(int j=i+1;j<arr.length;j++){
             if(arr[i]==arr[j]){
                return j;
             }
     }
    
   }
 return -1;
}
static void  RemoveDuplicate(int []arr){
  int idx=Duplicate(arr);
  int  []result=new int [arr.length-1];
   for(int i=0;i<=arr.length-2;i++){
        if(idx==i){
            result[i]=arr[i+1];
            i++;
        }
        else{
         result[i]=arr[i];
        }
   }

}

}











