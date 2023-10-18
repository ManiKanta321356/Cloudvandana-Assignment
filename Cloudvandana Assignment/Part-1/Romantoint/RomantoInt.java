import java.util.*;

class RomantoInt 
{
	public static int romanInt(String s)
	{
		Map<Character,Integer> map = new HashMap<>();
		map.put('I',1);
		map.put('V',5);
		map.put('X',10);
		map.put('L',50);
		map.put('C',100);
		map.put('D',500);
		map.put('M',1000);

		int n = s.length();
		int result = map.get(s.charAt(n-1));
		for(int i=n-1;i>0;i--)
		{
			if(map.get(s.charAt(i))>map.get(s.charAt(i-1)))
			{
				result-=map.get(s.charAt(i-1));
			}
			else
			{
				result+=map.get(s.charAt(i-1));
			}
		}
		return result;


		
	}
	public static void main(String[] args) 
	{
		String s = "XX";
		System.out.println(romanInt(s));
	}
}
