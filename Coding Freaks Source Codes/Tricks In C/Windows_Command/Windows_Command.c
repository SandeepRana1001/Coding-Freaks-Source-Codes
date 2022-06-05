#include<stdio.h>
#include<conio.h>
main()
{
	int choice=0;
	
	while(1)
	{
		printf("\n\n\t\t Welcome To Menu");	
		printf("\n\n\t\t 1. Shutdown.");	
		printf("\n\n\t\t 2. Restart.");	
		printf("\n\n\t\t 3. Abort Current Action.");	
		printf("\n\n\t\t Choose Your Option:");
		scanf("%d",& choice);
		
		if(choice==1)
		{
			system("c:\\Windows\\system32\\shutdown /s");	
		}	
		else if(choice==2)
		{
			system("c:\\Windows\\system32\\shutdown /r");	
		}	
		else if(choice==3)
		{
			system("c:\\Windows\\system32\\shutdown /a");	
		}	
		else 
		{
			printf("Not An Option");
		}

		printf("\n\n\t\t Press Any Key To Continue");
		getch();	
		system("cls");	
		
	}
}
