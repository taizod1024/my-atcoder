import java.util.Scanner;

public class abc229_a {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();
        sc.close();
        String ab = a + b;
        // System.out.println(ab);
        if (ab.equals(".##.") || ab.equals("#..#")) {
            System.out.println("No");
        } else {
            System.out.println("Yes");
        }
    }

}