					// C program to create a folder
#include<stdio.h>
#include<conio.h>
#include<windows.h>
void menu();
void hold();
void add();
void removes();
main(){
	
	int choice=0;
			
	while(1){
		system("cls");
		menu();
		scanf("%d", & choice);
		
		switch(choice){			
	
		case 1: system("tree"); 
				hold();
				break;
				
		case 2: add();
				hold(); 
				break;
				
		case 3: removes(); 
				hold(); 
				break;

		case 4: printf("\n\n\t\t Thank You.");
				exit(0); 
				break;

		default: break; 
		
				
				      }
}}

void menu(){
		printf("\n\n\t\t Press 1 To View Current Directory Structure:");
		printf("\n\n\t\t Press 2 To Create A Folder In Directory:");
		printf("\n\n\t\t Press 3 To Remove Folder From Current Directory :");		
		printf("\n\n\t\t Press 4 To Exit :");		
		printf("\n\n\t\t Enter Any Option From Above :");		
}

void hold(){
	printf("\n\n\t\t Press Any Key To Continue:");
	getch();
}

void add(){
	system("mkdir codingfreaks"); 
	printf("codingfreaks folder created successfully");
}

void removes(){
	system("rd codingfreaks"); 
	printf("codingfreaks folder removed successfully");
}
