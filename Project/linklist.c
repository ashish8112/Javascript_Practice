#include<stdio.h>
#include<stdlib.h>
typedef struct node{
int data;
struct node * next;
}node;
node *head=0;
node *temp;
node*traveseral;
void createNode()
{
    node * newnode=(node *)malloc(sizeof(node));
    printf("\nEnter the data in linklist : ");
    scanf("%d",&newnode->data);
    newnode->next=0;
    if(head==0)
    {
    head=newnode;
    temp=head;
    }
    else{
        temp->next=newnode;
        temp=newnode;
    }
}
void display()
{
    traveseral=head;
    while(traveseral!=0)
    {
        printf("%d -> ",traveseral->data);
        traveseral=traveseral->next;

    }
}
void deleteAtEnd()
{
    node * delete;
    traveseral=head;
    while(traveseral->next!=0)
    {
        delete=traveseral;
        traveseral=traveseral->next;
    }
    delete->next=0;
    temp=delete;
    free(traveseral);
}
int main()
{
    while(1)
    {   int choice;
        printf("\nEnter 1. for insertion a node in linklist :");
        printf("\nEnter 2. for traveresal :");
        printf("\nEnter 4.To exit :");

        scanf("%d",&choice);
        switch(choice)
        {
            case 1: createNode();
                break;
            case 2: display();
                break;
            case 3: deleteAtEnd();
            break;
            case 4: exit(0);
        }
    }
}