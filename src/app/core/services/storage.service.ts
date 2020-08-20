import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';

@Injectable({ providedIn: 'root' , useClass: SessionStorageService})

export abstract class StorageService {
  abstract getItem<T>(key: string): Promise<T>;
  abstract setItem<T>(key: string, value: any): Promise<void>;

  abstract getItemSync<T>(key: string);
  abstract setItemSync<T>(key: string, value: any);

  abstract removeItem(key: string): Promise<void>;
}

