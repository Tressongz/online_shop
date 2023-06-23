import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._brands = []
        this._types = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 2
        makeAutoObservable(this)
    }

    setBrands(brands) {
        this._brands = brands
    }
    setTypes(types) {
        this._types = types
    }

    setSelectedType(type) {
        this._selectedType = type
        this.setPage(1)
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
        this.setPage(1)
    }

    setLimit(limit) {
        this._limit = limit
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setDevices(devices) {
        this._devices = devices
    }

    get brands() {
        return this._brands
    }

    get types() {
        return this._types
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get devices() {
        return this._devices
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

}