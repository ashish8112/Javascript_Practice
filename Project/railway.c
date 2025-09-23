#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Passenger structure
struct Passenger {
    int bookingId;
    char name[50];
    int age;
    int seatNo;              // -1 if in waiting list
    struct Passenger* next;
};

// Head pointers for confirmed and waiting lists
struct Passenger* confirmedHead = NULL;
struct Passenger* waitingHead = NULL;

// Global variables
int totalSeats;
int confirmedCount = 0;
int nextBookingId = 1;

// Function to create a new passenger node
struct Passenger* createPassenger(char name[], int age, int seatNo) {
    struct Passenger* p = (struct Passenger*)malloc(sizeof(struct Passenger));
    p->bookingId = nextBookingId++;
    strcpy(p->name, name);
    p->age = age;
    p->seatNo = seatNo;
    p->next = NULL;
    return p;
}

// Append node to the end of a linked list
struct Passenger* appendNode(struct Passenger* head, struct Passenger* node) {
    if (head == NULL) return node;
    struct Passenger* cur = head;
    while (cur->next != NULL) cur = cur->next;
    cur->next = node;
    return head;
}

// Book a ticket
void bookTicket(char name[], int age) {
    if (confirmedCount < totalSeats) {
        struct Passenger* p = createPassenger(name, age, confirmedCount + 1);
        confirmedHead = appendNode(confirmedHead, p);
        confirmedCount++;
        printf("Booked (Confirmed). Booking ID: %d, Seat No: %d\n", p->bookingId, p->seatNo);
    } else {
        struct Passenger* p = createPassenger(name, age, -1);
        waitingHead = appendNode(waitingHead, p);
        printf("All seats full. Added to waiting list. Booking ID: %d\n", p->bookingId);
    }
}

// Remove a node by booking ID
struct Passenger* removeNode(struct Passenger** head, int bookingId) {
    struct Passenger* cur = *head;
    struct Passenger* prev = NULL;
    while (cur != NULL) {
        if (cur->bookingId == bookingId) {
            if (prev == NULL) *head = cur->next;
            else prev->next = cur->next;
            cur->next = NULL;
            return cur;
        }
        prev = cur;
        cur = cur->next;
    }
    return NULL;
}

// Cancel a ticket
void cancelTicket(int bookingId) {
    // Try removing from confirmed list
    struct Passenger* removed = removeNode(&confirmedHead, bookingId);
    if (removed != NULL) {
        printf("Cancelled confirmed booking: %d, Seat: %d\n", removed->bookingId, removed->seatNo);
        confirmedCount--;

        int freedSeat = removed->seatNo; // store freed seat
        free(removed);

        // Promote first passenger from waiting list
        if (waitingHead != NULL) {
            struct Passenger* promote = waitingHead;
            waitingHead = waitingHead->next;
            promote->seatNo = freedSeat;
            promote->next = NULL;
            confirmedHead = appendNode(confirmedHead, promote);
            confirmedCount++;
            printf("Promoted from waiting: Booking ID %d assigned Seat %d\n", promote->bookingId, promote->seatNo);
        }
        return;
    }

    // Try removing from waiting list
    removed = removeNode(&waitingHead, bookingId);
    if (removed != NULL) {
        printf("Cancelled waiting booking: %d\n", removed->bookingId);
        free(removed);
    } else {
        printf("Booking ID not found: %d\n", bookingId);
    }
}

// Display confirmed reservations
void displayConfirmed() {
    printf("\n-- Confirmed Reservations --\n");
    if (confirmedHead == NULL) {
        printf("None\n");
        return;
    }
    struct Passenger* cur = confirmedHead;
    while (cur != NULL) {
        printf("BookingID: %d, Name: %s, Age: %d, Seat: %d\n",
               cur->bookingId, cur->name, cur->age, cur->seatNo);
        cur = cur->next;
    }
}

// Display waiting list
void displayWaiting() {
    printf("\n-- Waiting List --\n");
    if (waitingHead == NULL) {
        printf("None\n");
        return;
    }
    struct Passenger* cur = waitingHead;
    while (cur != NULL) {
        printf("BookingID: %d, Name: %s, Age: %d\n",
               cur->bookingId, cur->name, cur->age);
        cur = cur->next;
    }
}

// Search for a passenger
void searchPassenger(int bookingId) {
    struct Passenger* cur = confirmedHead;
    while (cur != NULL) {
        if (cur->bookingId == bookingId) {
            printf("Found in Confirmed: %s, Seat: %d\n", cur->name, cur->seatNo);
            return;
        }
        cur = cur->next;
    }
    cur = waitingHead;
    while (cur != NULL) {
        if (cur->bookingId == bookingId) {
            printf("Found in Waiting List: %s\n", cur->name);
            return;
        }
        cur = cur->next;
    }
    printf("Booking ID not found: %d\n", bookingId);
}

// Main function
int main() {
    printf("Railway Reservation System\n");
    printf("Enter total seats for train: ");
    scanf("%d", &totalSeats);
    getchar(); // consume newline

    int choice, age, bookingId;
    char name[50];

    while (1) {
        printf("\nChoose an option:\n");
        printf("1 - Book Ticket\n2 - Cancel Ticket\n3 - Show Confirmed\n");
        printf("4 - Show Waiting List\n5 - Search Passenger\n6 - Exit\n");
         printf("Enter your choice: "); 
        scanf("%d", &choice);
        getchar(); // consume newline

        switch (choice) {
            case 1:
                printf("Enter name: ");
                scanf(" %[^\n]", name); // read full line with spaces
                printf("Enter age: ");
                scanf("%d", &age);
                getchar();
                bookTicket(name, age);
                break;
            case 2:
                printf("Enter booking ID to cancel: ");
                scanf("%d", &bookingId);
                getchar();
                cancelTicket(bookingId);
                break;
            case 3:
                displayConfirmed();
                break;
            case 4:
                displayWaiting();
                break;
            case 5:
                printf("Enter booking ID to search: ");
                scanf("%d", &bookingId);
                getchar();
                searchPassenger(bookingId);
                break;
            case 6:
                printf("Exiting. Goodbye!\n");
                return 0;
            default:
                printf("Invalid choice! Try again.\n");
        }
    }
    return 0;
}