import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private static nextId = 1;

  private url = "http://localhost:3000/produtos";

  constructor(private _httpClient: HttpClient) {
    this.initializeCounter();
  }

  initializeCounter() {
    const storedId = localStorage.getItem('nextId');
    if (storedId) {
      ProdutoService.nextId = parseInt(storedId, 10);
    }
  }


  getProduto(id: any): Observable<Produto> {
    const urlAtualizar = `${this.url}?id=${id}`;
    return this._httpClient.get<Produto>(urlAtualizar);
  }
  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url);
  }
  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    produto.id = ProdutoService.nextId++;
    localStorage.setItem('nextId', ProdutoService.nextId.toString());
    return this._httpClient.post<Produto[]>(this.url, produto);
  }


  atualizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Produto[]>(urlAtualizar, produto);
  }
  removerProduto(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Produto[]>(urlDeletar);
  }
}