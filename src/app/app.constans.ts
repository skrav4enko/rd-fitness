import { InjectionToken } from '@angular/core';

export const APP_ROUTES = {
  schedule: 'schedule',
  workouts: 'workouts',
  meals: 'meals'
}

export const PAGE_TOKEN_KEY = 'PageToken';

export const PageToken = new InjectionToken(PAGE_TOKEN_KEY)
