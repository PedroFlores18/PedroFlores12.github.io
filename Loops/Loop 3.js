// Loop 3 //

public class PrimeNumbers 
{
    public static void main(String[] args) 
    {
        int i = 500;
        StringBuilder result = new StringBuilder();
        
        while (i >= 2) 
        {
            if (isPrime(i)) 
            {
                result.insert(0, i + ", ");
            }
            i--;
        }

        System.out.println("<p>" + result.toString() + "</p>");
    }

    public static boolean isPrime(int num) 
    {
        if (num <= 1) 
        {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) 
        {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}