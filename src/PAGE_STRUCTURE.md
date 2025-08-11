# Dokumentacja Struktury i Nawigacji - ERC 2.0 Frontend

## Struktura Strony

Aplikacja wykorzystuje **Mantine AppShell** jako główny kontener layoutu:

```
AppShell
├── NavigationBar (menu boczne)
└── AppShellMain (obszar główny)
```

## System Nawigacji

### Technologie nawigacyjne:

- **React Router** - routing po stronie klienta
- **Mantine AppShell** - layout z bocznym menu
- **Mantine NavLink** - komponenty nawigacyjne
- **Tabler Icons** - ikony SVG

### Rodzaje nawigacji:

1. **Linki bezpośrednie** - prowadzą od razu do strony
2. **Rozwijane sekcje** - zawierają hierarchiczne podmenu
3. **Ochrona tras** - automatyczne przekierowanie dla nieuprawnionych użytkowników

## Struktura Stron

### **Strona Główna** - `/`

Dostęp: wszyscy użytkownicy

Ekran powitalny z informacjami o statusie użytkownika i możliwością przełączania trybu administrator/użytkownik (Do zmiany).

### **Informacje o Użytkowniku** - `/user-info`

Dostęp: wszyscy użytkownicy

Strona profilowa zalogowanego użytkownika z danymi osobowymi.

## **Sekcja: Zarządzanie Członkami**

Dostęp: tylko administratorzy

### **Lista Członków** - `/members`

Przegląd wszystkich członków organizacji z funkcjami filtrowania.

### **Dodaj Członka** - `/add-member`

Formularz rejestracji nowego członka z przypisywaniem ról.

### **Przedłuż Członkostwo** - `/extend-membership`

Narzędzie do zarządzania okresami ważności członkostwa.

## **Sekcja: Zarządzanie Systemem**

Dostęp: tylko administratorzy

### **Lista Ról** - `/roles`

Zarządzanie rolami i uprawnieniami w systemie.

### **Dodaj Rolę** - `/add-role`

Formularz tworzenia nowych ról systemowych.

### **Kierunki Studiów** - `/majors`

Lista i zarządzanie dostępnymi kierunkami studiów.

### **Dodaj Kierunek** - `/add-major`

Formularz dodawania nowego kierunku studiów.

## **Sekcja: Zamki**

Dostęp: tylko administratorzy

### **Lista Zamków** - `/locks`

Przegląd wszystkich zamków elektronicznych z ich statusem.

### **Logi Zamków** - `/lock-logs`

Historia operacji na zamkach z możliwością filtrowania.

### **Zdalny Dostęp** - `/remote-unlock`

Panel awaryjnego zdalnego otwierania zamków.

## **System Uprawnień**

### Poziomy dostępu:

- **Użytkownik:** Strona główna + Informacje o użytkowniku
- **Administrator:** Wszystkie strony

### Implementacja ochrony:

- Komponent `AdminRoute` sprawdza uprawnienia
- Menu dynamicznie pokazuje/ukrywa sekcje
- Automatyczne przekierowanie na stronę główną dla nieuprawnionych
