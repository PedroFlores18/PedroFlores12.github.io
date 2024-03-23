// Loop 2 //

public class PhonebookSearch 
{
    public static void main(String[] args) 
    {
        String nombre = "Pedro";
        String resultado = "";
        String[][] phonebook = {{"Pedro", "123456"}, {"Dilan", "789012"}, {"Santiago", "345678"}};

        for (int i = 0; i < phonebook.length; i++) 
        {
            if (nombre.equals(phonebook[i][0])) 
            {
                resultado = "Nombre: " + phonebook[i][0] + ", Numero Telefonico: " + phonebook[i][1];
                break;
            }
        }

        System.out.println("<p>" + resultado + "</p>");
    }
}