import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, first, delay } from 'rxjs';
import { Contact } from '../model/contact';
import { DataStorageService } from '../shared/data-storage.service';
import { ContactsService } from './contacts.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsEditResolverService implements Resolve<Contact> {

  constructor(
    private dataStorageService: DataStorageService,
    private contactsService: ContactsService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Contact> | Promise<Contact> | Contact {
    // console.log('Called Get Product in resolver...', route);

    // 
    // const contact = this.dataStorageService
    //   .findContactById(Number(route.paramMap.get('id')));

    const contact = this.contactsService.getContact(Number(route.paramMap.get('id')));

    return contact;
  }
}
