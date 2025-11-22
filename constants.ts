import { MenuItem, Review, OpeningHours } from './types';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export const CONTACT_INFO = {
  name: "Qualitätseck",
  address: "Hedderichstraße 132, 60596 Frankfurt am Main",
  district: "Sachsenhausen",
  phone: "+49 69 61 66 44",
  phoneLink: "tel:+4969616644",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Qualitätseck+Hedderichstraße+132+Frankfurt",
};

export const OPENING_HOURS: OpeningHours[] = [
  { day: "Montag", time: "Ruhetag" },
  { day: "Dienstag", time: "17:00 – 00:00 Uhr" },
  { day: "Mittwoch", time: "17:00 – 00:00 Uhr" },
  { day: "Donnerstag", time: "17:00 – 00:00 Uhr" },
  { day: "Freitag", time: "17:00 – 00:00 Uhr" },
  { day: "Samstag", time: "17:00 – 00:00 Uhr" },
  { day: "Sonntag", time: "12:00 – 15:00 & 17:00 – 00:00 Uhr" },
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    name: "Red-Snapper-Filet",
    description: "Mit Olivenöl und Salbei verfeinert, serviert mit Beilagen.",
    price: "ca. 13,50 €",
    category: "greek"
  },
  {
    name: "Schweinefilet & Pfifferlinge",
    description: "Zartes Filet mit frischen Pfifferlingen der Saison.",
    price: "ca. 13,50 €",
    category: "german"
  },
  {
    name: "Linguine mit Pfifferlingen",
    description: "Frische Pasta mit saisonalen Pilzen (Saisonangebot).",
    price: "19,90 €",
    category: "german"
  },
  {
    name: "Baby-Calamari",
    description: "Frittierte Calamari serviert mit frischem Salat.",
    price: "ca. 22,90 €",
    category: "greek"
  },
  {
    name: "Bifteki",
    description: "Gefülltes Hacksteak nach griechischer Art, großzügige Portion.",
    category: "greek"
  },
  {
    name: "Marinierte Champignons",
    description: "Mit Cocktailtomaten und Knoblauch.",
    price: "ca. 6,00 €",
    category: "starter"
  },
  {
    name: "Pavlova",
    description: "Baiser-Torte mit Sahne und Erdbeermarmelade.",
    price: "ca. 9,50 €",
    category: "dessert"
  },
  {
    name: "Quali-Burger",
    description: "Das beliebte Hausgericht.",
    category: "german"
  }
];

export const REVIEWS: Review[] = [
  {
    author: "Google Rezension (2025)",
    text: "Bestes Frankfurter Restaurant mit griechischer Note. Zarte Lammkoteletts und ein mit Käse gefülltes Bifteki – einfach top!",
    source: "Google",
    rating: 5
  },
  {
    author: "Gast auf TripAdvisor",
    text: "Der Name Qualitätseck hält, was er verspricht. Vom ersten Moment an fühlt man sich willkommen. Kulinarisch ein echter Volltreffer.",
    source: "TripAdvisor",
    rating: 5
  },
  {
    author: "FRIZZ Magazin",
    text: "5 von 6 Punkten in den Kategorien Essen, Service und Ambiente.",
    source: "Presse",
    rating: 5
  }
];