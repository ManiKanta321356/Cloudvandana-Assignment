import java.util.List;
import java.util.ArrayList;
import java.util.Collections;


class ArrayShuffle 
{


	public static void main(String[] args) 
	{
		int arr[] = {1,2,3,4,5,6,7};
		int n = arr.length;

		List<Integer> list = new ArrayList<Integer>();

		for(int i=0; i<n; i++)
		{
			list.add(arr[i]);	
		}

		Collections.shuffle(list);

		System.out.println(list);
		
	}
}
