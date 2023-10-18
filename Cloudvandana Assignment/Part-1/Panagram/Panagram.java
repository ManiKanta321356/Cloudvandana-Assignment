import java.util.*;

class Panagram 
{
	public static int panagrm(String s)
	{
		s=s.toLowerCase();
		HashSet<Character> set= new HashSet<>();

		int n = s.length();
		for(int i=0;i<n;i++)
		{
			if(s.charAt(i)>='a' && s.charAt(i)<='z')
			{
				set.add(s.charAt(i));
			}
		}

		int result=set.size();
		return result;

	}
	public static void main(String[] args) 
	{
		String s="abcdefghijklmnopqrstuvwxyz";
		int res = panagrm(s);
		if(res==26)
		{
			System.out.println("Panagram");
		}
		else
		{
			System.out.println("Not Panagram");
		}
	}
}
