<script lang="ts" context="module">
import { writable } from 'svelte/store';
import type { ButtonColor } from 'sveltestrap/src/Button';

const open = writable(false)
type Options = {title : string, desc: string, label: string, buttonColor?: ButtonColor, toggle : () => void, cancel : () => void}
const optionStore = writable<Options>()
export const promiseModal = (options : Omit<Options, 'toggle' | 'cancel'>) => {
    return new Promise((res,rej) => {
        openModal({...options, toggle: () => res(null), cancel: rej})
    })
}
export const openModal = (options : Options) => {
    optionStore.set(options)
    open.set(true)
}
</script>
<script lang="ts">
    import {
      Button,
      Modal,
      ModalBody,
      ModalFooter,
      ModalHeader
    } from 'sveltestrap';
    const toggle = () => ($open = !$open);

  </script>
  
  {#if $open && $optionStore}
    <Modal isOpen={$open} {toggle}>
      <ModalHeader {toggle}>{$optionStore.title}</ModalHeader>
      <ModalBody>
        {$optionStore.desc}
      </ModalBody>
      <ModalFooter>
        <Button color={$optionStore.buttonColor || "primary"} on:click={() => {$optionStore.toggle(); toggle()}}>{$optionStore.label}</Button>
        <Button color="secondary" on:click={() => {$optionStore.cancel(); toggle()}}>Cancel</Button>
      </ModalFooter>
    </Modal>
{/if}