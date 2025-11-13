import { NextResponse } from 'next/server';
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { walrus, WalrusFile } from '@mysten/walrus';


export async function POST(req: Request) {
//   console.log("=== WALRUS UPLOAD API CALLED ===");

  try {
    const { blob, publisher } = await req.json();
    // console.log("Blob length:", blob?.length);
    // console.log("Publisher:", publisher);

    if (!blob || !publisher) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    // Convert blob to Uint8Array
    const data = new Uint8Array(blob);
    // console.log("Data converted to Uint8Array, length:", data.length);

    // Correct Walrus API endpoint - no /v1/store suffix
    const walrusUrl = `${publisher}/v1/blobs`;
    // console.log("Uploading to:", walrusUrl);

    const uploadResponse = await fetch(walrusUrl, {
      method: 'PUT',
      body: data,
    });

    // console.log("Walrus response status:", uploadResponse.status);

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      console.error("Walrus error response:", errorText);
      throw new Error(`Walrus upload failed (${uploadResponse.status}): ${errorText}`);
    }

    const result = await uploadResponse.json();
    // console.log("Walrus response:", JSON.stringify(result, null, 2));

    // Extract blobId from various possible response formats
    const blobId = result.newlyCreated?.blobObject?.blobId || 
                   result.alreadyCertified?.blobId ||
                   result.blobId;

    if (!blobId) {
      console.error("Full Walrus response:", result);
      throw new Error("No blobId found in Walrus response");
    }

    // console.log("✅ Upload successful! BlobID:", blobId);

    return NextResponse.json({ blobId });

  } catch (err: any) {
    console.error("❌ UPLOAD ERROR:", err.message);
    console.error("Full error:", err);
    
    return NextResponse.json(
      { 
        error: err.message || 'Upload failed',
        details: err.cause?.message 
      },
      { status: 500 }
    );
  }
}