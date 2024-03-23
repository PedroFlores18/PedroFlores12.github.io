// Loop 1 //

public class EjemploLoop 
{
    public static void main(String[] args) 
    {
        String[] myArray = {"Manzana", "Banana", "Naranja", "Uvas"};

        System.out.println("<ul>");
        for (String item : myArray) 
        {
            System.out.println("  <li>" + item + "</li>");
        }
        System.out.println("</ul>");
    }
}